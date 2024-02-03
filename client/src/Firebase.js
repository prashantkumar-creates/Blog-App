
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5d4f0.firebaseapp.com",
  projectId: "mern-blog-5d4f0",
  storageBucket: "mern-blog-5d4f0.appspot.com",
  messagingSenderId: "490355009009",
  appId: "1:490355009009:web:47a63eec729fd0f5461050"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);