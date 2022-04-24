// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5YUA-DIXV38udSOs0YSYxDREkLdGtk5g",
  authDomain: "travel-guru-c0c0b.firebaseapp.com",
  projectId: "travel-guru-c0c0b",
  storageBucket: "travel-guru-c0c0b.appspot.com",
  messagingSenderId: "272233199433",
  appId: "1:272233199433:web:88bb2fce5c6083b7fe0c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
