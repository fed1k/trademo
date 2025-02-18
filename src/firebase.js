// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIXPhOWb-6ngNS7_DNAb_4jWOBtrS7Im8",
  authDomain: "trademo-2e7c2.firebaseapp.com",
  projectId: "trademo-2e7c2",
  storageBucket: "trademo-2e7c2.firebasestorage.app",
  messagingSenderId: "1040884153926",
  appId: "1:1040884153926:web:a7fe77063e429e04bc1447",
  measurementId: "G-8NY7NREG0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);