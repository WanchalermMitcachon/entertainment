// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFIlcIdCywpAEwqtkZ51FwwmDyPc7ibzE",
  authDomain: "auth-movies-app-react.firebaseapp.com",
  projectId: "auth-movies-app-react",
  storageBucket: "auth-movies-app-react.appspot.com",
  messagingSenderId: "880303605159",
  appId: "1:880303605159:web:0ac866437b5ecd564ce282",
  measurementId: "G-B3L1VGCY5F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
