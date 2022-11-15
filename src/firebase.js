import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDQaudOJWABHwIvs1zSwwS9bXTE6A8A2OM",
    authDomain: "gram-b7a3e.firebaseapp.com",
    projectId: "gram-b7a3e",
    storageBucket: "gram-b7a3e.appspot.com",
    messagingSenderId: "125569275275",
    appId: "1:125569275275:web:3e819d9d17ff8a8ef84b8e"
  }).auth();