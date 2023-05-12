// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


export const firebaseConfig = {
    apiKey: "AIzaSyB64YBZJQvBbwYrB37h4sk0Akjj4Otl5yI",
    authDomain: "eshop-439bb.firebaseapp.com",
    projectId: "eshop-439bb",
    storageBucket: "eshop-439bb.appspot.com",
    messagingSenderId: "609860866611",
    appId: "1:609860866611:web:8fa1dff65df341f6ad4946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;