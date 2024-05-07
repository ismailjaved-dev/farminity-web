// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP0MKnZ_fDALpW0vKecvoOIwp9Hd1rTTM",
    authDomain: "farminity-b8274.firebaseapp.com",
    projectId: "farminity-b8274",
    storageBucket: "farminity-b8274.appspot.com",
    messagingSenderId: "678054929052",
    appId: "1:678054929052:web:57ef48a5f9a264b64dc359",
    measurementId: "G-YRBKBYCD5W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}