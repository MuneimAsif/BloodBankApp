// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3E-kYvJK6sS_uK4xPCIs2RLAKE3XFlK8",
  authDomain: "blood-bank-a4931.firebaseapp.com",
  projectId: "blood-bank-a4931",
  storageBucket: "blood-bank-a4931.appspot.com",
  messagingSenderId: "792210550267",
  appId: "1:792210550267:web:ea2d5ae033b0d5f8e76f5e",
  measurementId: "G-FWVTLRNF47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);