// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8IxkZBtkIjRyfDRW4b3zKP2KEFWv08Yg",
  authDomain: "reactproject-42fed.firebaseapp.com",
  projectId: "reactproject-42fed",
  storageBucket: "reactproject-42fed.appspot.com",
  messagingSenderId: "978638439367",
  appId: "1:978638439367:web:9ea49abd5e4d3889d30fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos 
export const db = getFirestore(app);