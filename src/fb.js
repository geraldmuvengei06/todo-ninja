import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDygEd3CrnD_OD4Ki0ZOMTQL-wwpnC_ayA",
    authDomain: "todo-ninja-366b4.firebaseapp.com",
    databaseURL: "https://todo-ninja-366b4.firebaseio.com",
    projectId: "todo-ninja-366b4",
    storageBucket: "todo-ninja-366b4.appspot.com",
    messagingSenderId: "1059075155228",
    appId: "1:1059075155228:web:e24a0b8261d332b0b746d9",
    measurementId: "G-Y3KX9QF4HP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

export default db;