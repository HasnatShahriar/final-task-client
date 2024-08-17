import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjg9sSMs3o7rtUnuUhZXBAD62Tzfj6aQ",
  authDomain: "pro-product-c9cc2.firebaseapp.com",
  projectId: "pro-product-c9cc2",
  storageBucket: "pro-product-c9cc2.appspot.com",
  messagingSenderId: "34584665120",
  appId: "1:34584665120:web:020346d1ee41ef29773045"
};

// Initialize Firebase only if no apps have been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export default auth;
