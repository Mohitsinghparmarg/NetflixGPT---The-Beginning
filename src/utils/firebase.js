// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl8ErO1D7b3ciY6qgp5mdvx5L-kvCzaYQ",
  authDomain: "netflixgpt-ef9ec.firebaseapp.com",
  projectId: "netflixgpt-ef9ec",
  storageBucket: "netflixgpt-ef9ec.appspot.com",
  messagingSenderId: "840443104895",
  appId: "1:840443104895:web:94a323b45d28e27c2db94a",
  measurementId: "G-YNFEB1G6WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();