// don to store config on the client side
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhD7DKsNf4YinuD8YCY6d6hxYAdCDNeoA",
  authDomain: "simple-firebase-7ee6c.firebaseapp.com",
  projectId: "simple-firebase-7ee6c",
  storageBucket: "simple-firebase-7ee6c.firebasestorage.app",
  messagingSenderId: "58192262455",
  appId: "1:58192262455:web:bad74be09b44a041a796b2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth