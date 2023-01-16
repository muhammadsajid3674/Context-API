// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC11KF_0pWOsjAFCSdSk-fuQjFvQK0ccZw",
    authDomain: "react-router-website-a25c3.firebaseapp.com",
    databaseURL: "https://react-router-website-a25c3-default-rtdb.firebaseio.com",
    projectId: "react-router-website-a25c3",
    storageBucket: "react-router-website-a25c3.appspot.com",
    messagingSenderId: "970790098648",
    appId: "1:970790098648:web:791e164900af18459669ad",
    measurementId: "G-Y6DFQEGSB8"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const dataBase = getFirestore(app)

export default app;