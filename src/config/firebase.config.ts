// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxWItXhVHaEGwWQNy3pSmetugn8N2JzjQ",
    authDomain: "ynov-wfs.firebaseapp.com",
    projectId: "ynov-wfs",
    storageBucket: "ynov-wfs.appspot.com",
    messagingSenderId: "113815921255",
    appId: "1:113815921255:web:abd2bb2e281ed5d5732ac2",
    measurementId: "G-FKXXGMZ6PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
