
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnFzxIipwzCP0ukxECrvWQNiQb6O2vK_Y",
  authDomain: "prepwise-4ee87.firebaseapp.com",
  projectId: "prepwise-4ee87",
  storageBucket: "prepwise-4ee87.firebasestorage.app",
  messagingSenderId: "1097761117625",
  appId: "1:1097761117625:web:9879a7f7e8962d6c671268",
  measurementId: "G-VRQ3C631BV"
};


const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);