// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTJ4Wsbf5YDQHRhs-TvN0SJ5pU2xi5jQI",
  authDomain: "my-project-1529184079312.firebaseapp.com",
  projectId: "my-project-1529184079312",
  storageBucket: "my-project-1529184079312.appspot.com",
  messagingSenderId: "855972979305",
  appId: "1:855972979305:web:7a7bd91a8a4147116278f8",
  measurementId: "G-DE1JW147G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)