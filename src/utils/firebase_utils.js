import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { v4 } from "uuid";
export async function checkUserByToken(token) {
  try {
    // Reference to your 'users' collection
    const usersRef = collection(db, "users");

    // Create a query to find the user with the specific token
    const q = query(usersRef, where("token", "==", token));

    // Get the query snapshot
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Return the first document's data if a user is found
      const userData = querySnapshot.docs[0].data();
      return userData; // Return the user data
    } else {
      console.log("No user found with that token.");
      return null; // No user found, return null or some other indication
    }
  } catch (error) {
    console.error("Error checking user by token: ", error);
    return null; // Return null if there was an error
  }
}

// Function to add data to Firestore with uniqueness check
export async function addDataWithUniquenessCheck(collectionName, data) {
  // Example: Check for uniqueness of 'username'
  const userCollection = collection(db, collectionName); // Reference to the collection

  // Create a query to check if the username already exists
  const q = query(userCollection, where("username", "==", data.username));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // If querySnapshot is not empty, data already exists
    console.log("Username already exists!");
    return { error: "username exists" };
  }

  // If the username is unique, generate a unique token
  const uniqueToken = v4();

  // Add the token to the data
  data.token = uniqueToken;
  data.isAdmin = false;

  // Add the data to Firestore
  try {
    const docRef = await addDoc(userCollection, data);
    return data.token;
  } catch (error) {
    return error;
  }
}
