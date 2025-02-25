import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
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

export const addDeviceData = async (userToken, title) => {
  try {
    // Reference the devices collection
    const devicesRef = collection(db, "devices");

    // Prepare the data to be added
    const deviceData = {
      user_token: userToken,
      title,
      timestamp: serverTimestamp(), // Firebase v9 syntax
    };

    // Add data to the devices collection
    const docRef = await addDoc(devicesRef, deviceData);

    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Return the document ID in case you need it
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Failed to add device data");
  }
};

// 

export const getDevicesByUserToken = async (userTokenValue) => {
  try {
    // Reference to the devices collection
    const devicesRef = collection(db, "devices");

    // Query to find devices where user_token equals the specified value
    const devicesQuery = query(devicesRef, where("user_token", "==", userTokenValue));

    // Execute the query
    const querySnapshot = await getDocs(devicesQuery);

    // Check if any devices were found and return them
    if (querySnapshot.empty) {
      console.log("No devices found with the given user_token.");
      return [];
    }

    // Map the documents to an array of data
    const devices = querySnapshot.docs.map(doc => ({

      id: doc.id,
      ...doc.data(),
    }));

    return devices;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw new Error("Error fetching devices");
  }
};

export const getPaymentVerifications = async () => {
  const querySnapshot = await getDocs(collection(db, 'deposit_verifications'));
  // Map over the documents and format the date
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    const timestamp = data.date; // Assuming 'timestamp' is the field name
    const date = timestamp.toDate();
    // Format the date in the requested format (24 февраля 2025 23:20)
    const formattedDate = new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
    return {
      id: doc.id,
      ...data,
      formattedDate, // Add the formatted date to the returned object
    };
  });
};

export const getWalletAddress = async () => {
  const querySnapshot = await getDocs(collection(db, 'deposit_wallet'));
  return querySnapshot.docs.map((doc) => doc.data());
}

