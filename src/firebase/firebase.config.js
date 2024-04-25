// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACA2kTP9WHoeIGky-3foGZZMD6d1QbgAU",
  authDomain: "coffee-store-3e06f.firebaseapp.com",
  projectId: "coffee-store-3e06f",
  storageBucket: "coffee-store-3e06f.appspot.com",
  messagingSenderId: "212534541872",
  appId: "1:212534541872:web:34c7e09c84cc4ebb31b7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;