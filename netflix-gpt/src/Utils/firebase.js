// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8hlIuegAH4_95FUo1hSafr95h85XEsw",
  authDomain: "netflixgpt-33d1c.firebaseapp.com",
  projectId: "netflixgpt-33d1c",
  storageBucket: "netflixgpt-33d1c.appspot.com",
  messagingSenderId: "386425013560",
  appId: "1:386425013560:web:4288713b1ff41f4582adcd",
  measurementId: "G-8ZH49385W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();