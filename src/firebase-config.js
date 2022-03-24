// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHy7lYNQY5yWFDLH5z064IQd7-7DBIlxs",
  authDomain: "auth-app-f5700.firebaseapp.com",
  projectId: "auth-app-f5700",
  storageBucket: "auth-app-f5700.appspot.com",
  messagingSenderId: "250473070861",
  appId: "1:250473070861:web:db3e2f8d05f107d2ec3044",
  measurementId: "G-Q9T296YN7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// exports all
export const auth = getAuth(app);
export const analytics = getAnalytics(app);


