
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLB3BO55chdfUWOk7XBqssDkde7y2psVY",
  authDomain: "easy-rent-b7bcc.firebaseapp.com",
  projectId: "easy-rent-b7bcc",
  storageBucket: "easy-rent-b7bcc.appspot.com",
  messagingSenderId: "1026387481688",
  appId: "1:1026387481688:web:3ff1c3759ff249eefce62d",
  measurementId: "G-BKGCEJER95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db =getFirestore(app)