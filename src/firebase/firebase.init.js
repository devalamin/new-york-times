// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEDCxP-cP7hTNBCJkUrTH9w9ZhdI0JSxA",
    authDomain: "new-york-times-40c02.firebaseapp.com",
    projectId: "new-york-times-40c02",
    storageBucket: "new-york-times-40c02.firebasestorage.app",
    messagingSenderId: "306382887336",
    appId: "1:306382887336:web:54e645144630fb2f43e59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app