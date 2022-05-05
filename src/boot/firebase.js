// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import * as fs from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_NUm20riIV0OpsuFMIzK4daRK58ppo8",
  authDomain: "ccweb-cc466.firebaseapp.com",
  databaseURL: "https://ccweb-cc466.firebaseio.com",
  projectId: "ccweb-cc466",
  storageBucket: "ccweb-cc466.appspot.com",
  messagingSenderId: "822560219003",
  appId: "1:822560219003:web:3615d2b2faeaafc9b027de",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = fs.getFirestore(firebaseApp);

export { db, fs };
