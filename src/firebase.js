// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADH40XdGRi_YgLgMyW2DeFYiXUrxlANsA",
    authDomain: "clone-26c1d.firebaseapp.com",
    projectId: "clone-26c1d",
    storageBucket: "clone-26c1d.appspot.com",
    messagingSenderId: "591287659874",
    appId: "1:591287659874:web:2a4c84380a34f8f137903b",
    measurementId: "G-4LFRK7JHQQ"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const analytics = getAnalytics(app);
const auth = getAuth();

export { db, auth };