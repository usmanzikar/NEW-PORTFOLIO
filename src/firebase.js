import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzt1WNwYJlARWHZS9KBEP0mhuvA_JRSKw",
    authDomain: "usman-portfolio-4e750.firebaseapp.com",
    projectId: "usman-portfolio-4e750",
    storageBucket: "usman-portfolio-4e750.appspot.com",
    messagingSenderId: "924022984825",
    appId: "1:924022984825:web:ac3dd01478ea032fc944a8",
    measurementId: "G-S54J2XXHNH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();