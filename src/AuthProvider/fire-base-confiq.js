import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDP1FKg2rvXASwrhasM9o45B6orY9vdnQs",
    authDomain: "authentication-fire-base-4562a.firebaseapp.com",
    projectId: "authentication-fire-base-4562a",
    storageBucket: "authentication-fire-base-4562a.appspot.com",
    messagingSenderId: "510848037025",
    appId: "1:510848037025:web:b4a7eed3ff1e989c3240e0"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth