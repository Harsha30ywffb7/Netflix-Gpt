// Import the functions you need from the SDKs you need

import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByh-pYJbVpjOiOxql-QtwL9cn2OcQTqWI",
  authDomain: "netflix-gpt-38abe.firebaseapp.com",
  projectId: "netflix-gpt-38abe",
  storageBucket: "netflix-gpt-38abe.appspot.com",
  messagingSenderId: "291281990378",
  appId: "1:291281990378:web:a089c6ab6f1f629fb41d93",
  measurementId: "G-KGT5M81F1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
