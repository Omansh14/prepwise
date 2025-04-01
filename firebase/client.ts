// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ok1aDRhlNfvnLX0w3r5T5ieDVgvFpEs",
  authDomain: "job-quest-be684.firebaseapp.com",
  projectId: "job-quest-be684",
  storageBucket: "job-quest-be684.firebasestorage.app",
  messagingSenderId: "921667673170",
  appId: "1:921667673170:web:f6213639b80648afc9538b",
  measurementId: "G-ESBG1VQSCH"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app)
export const db = getFirestore(app) 