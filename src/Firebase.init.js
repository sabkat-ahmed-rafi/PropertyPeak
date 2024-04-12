// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.REACT_APP_API_KEY)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_OquoBkRAyGB_qkr6hbZIpRj7OnzfWJI",
  authDomain: "propertypeak-bb7c0.firebaseapp.com",
  projectId: "propertypeak-bb7c0",
  storageBucket: "propertypeak-bb7c0.appspot.com",
  messagingSenderId: "392314450357",
  appId: "1:392314450357:web:60e120f2b5a4dfcff969fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;