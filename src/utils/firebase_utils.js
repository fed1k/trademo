import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
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
  }).sort((a, b) => a.formattedDate - b.formattedDate)
};

export const getWalletAddress = async () => {
  const querySnapshot = await getDocs(collection(db, 'deposit_wallet'));
  return querySnapshot.docs.map((doc) => doc.data());
}

export const addDeposit = async (data) => {
  try {
    // Reference to the 'deposit_verifications' collection
    const depositVerificationsRef = collection(db, "deposit_verifications");

    // Add data to the collection
    const docRef = await addDoc(depositVerificationsRef, data);
    return docRef.id
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export const updateDeposit = async (doc_id, data, docu) => {
  try {
    // Reference to the 'deposit_verifications' document you want to update
    const docRef = doc(db, 'deposit_verifications', doc_id);

    // Update the specific fields of the document
    await updateDoc(docRef, data);

    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('token', '==', docu.user_token));

    // Get the documents matching the query
    const querySnapshot = await getDocs(q);

    // Check if a user with the specified token exists
    if (!querySnapshot.empty) {
      // Since the token is unique, we expect only one document to be returned
      const userDoc = querySnapshot.docs[0]; // Get the first (and only) document
      const userDocRef = doc(db, 'users', userDoc.id); // Reference to the user document

      // Check if 'balance' field exists
      const currentBalance = userDoc.data().balance;

      // if rejection, dont deposit the money to the balance
      if (data.status === "approved") {



        if (currentBalance !== undefined) {
          // If the 'balance' field exists, increment it by the amount
          await updateDoc(userDocRef, {
            balance: increment(Number(docu.amount)), // Add the new amount to the existing balance
          });
          console.log(`Balance updated successfully! New balance: ${Number(currentBalance) + Number(docu.amount)}`);
        } else {
          // If 'balance' doesn't exist, set it with the provided amount
          await updateDoc(userDocRef, {
            balance: Number(docu.amount), // Set the initial balance to the provided amount
          });
          console.log(`Balance added successfully! Initial balance: ${Number(docu.amount)}`);
        }
      }
      return data.status

    } else {
      console.log('No user found with the given token.');
    }

  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

export const getUserDepositHistory = async (token) => {
  try {
    // const db = getFirestore();  // Initialize Firestore
    const depositVerificationsRef = collection(db, "deposit_verifications");  // Reference to the collection
    const q = query(depositVerificationsRef, where("user_token", "==", token));  // Query for documents with user_token equal to token

    const querySnapshot = await getDocs(q);  // Execute the query
    const depositHistory = [];

    

    querySnapshot.forEach((doc) => {

      const timestamp = doc.data().date; // Assuming 'timestamp' is the field name
      const date = timestamp.toDate();
      // Format the date in the requested format (24 февраля 2025 23:20)
      const formattedDate = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);

      depositHistory.push({ id: doc.id, ...doc.data(), formattedDate });  // Push each document into the depositHistory array
    });

    return depositHistory;  // Return the deposit history array

  } catch (error) {
    console.error("Error getting documents: ", error);  // Log any errors
    throw new Error("Unable to fetch deposit history");  // Optionally, throw an error to be handled elsewhere
  }
}

export const getDocumentById = async (docId) => {
  try {
    // Reference to the document
    const docRef = doc(db, "devices", docId);

    // Fetch the document snapshot
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data()
      console.log(data)
      const formattedDate = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(data.timestamp.toDate());

      return {...data, date: formattedDate}  // Document exists
    } else {
      console.log("No such document!");  // Document doesn't exist
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

