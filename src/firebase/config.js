import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDHM6Fym7mJXCD04Aah0tbHfvctjnqOtG0",
    authDomain: "blog-system-a11a5.firebaseapp.com",
    projectId: "blog-system-a11a5",
    storageBucket: "blog-system-a11a5.appspot.com",
    messagingSenderId: "298765159294",
    appId: "1:298765159294:web:600bec225ddbaf55c7412f"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {db,timestamp};