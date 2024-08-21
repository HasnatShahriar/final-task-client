import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzTYk6RPqBZ2U2ZVtlVxVO0YcsUQ6ezw",
  authDomain: "myproduct-7a5e1.firebaseapp.com",
  projectId: "myproduct-7a5e1",
  storageBucket: "myproduct-7a5e1.appspot.com",
  messagingSenderId: "184616066411",
  appId: "1:184616066411:web:05e90c7e9a2c4e7e9bc02e"
};

// Initialize Firebase only if no apps have been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export default auth;
