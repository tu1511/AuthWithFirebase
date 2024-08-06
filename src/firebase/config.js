import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPHvwGXx_C6aD62uq8ouO3Y3T40sYte0M",
  authDomain: "book-list-with-firebase-cf0c9.firebaseapp.com",
  projectId: "book-list-with-firebase-cf0c9",
  storageBucket: "book-list-with-firebase-cf0c9.appspot.com",
  messagingSenderId: "885149617094",
  appId: "1:885149617094:web:31b53cb907168442fe80c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
