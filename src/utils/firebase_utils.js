import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

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

