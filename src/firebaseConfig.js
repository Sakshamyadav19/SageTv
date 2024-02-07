// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqgjrgRF9mqe0GiNNECC-jGUAJBg-VYNA",
  authDomain: "sagetv-99205.firebaseapp.com",
  projectId: "sagetv-99205",
  storageBucket: "sagetv-99205.appspot.com",
  messagingSenderId: "355151978328",
  appId: "1:355151978328:web:359ef52f2be1baf0500f2d",
  measurementId: "G-TSMZTTWXT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();