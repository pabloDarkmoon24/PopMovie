import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrzxqIQjsEFrixmAKF_9RWXmSJtWBBv_4",
  authDomain: "popmovie-67dc0.firebaseapp.com",
  projectId: "popmovie-67dc0",
  storageBucket: "popmovie-67dc0.firebasestorage.app",
  messagingSenderId: "1063088927439",
  appId: "1:1063088927439:web:36ad6467438d1038b23dba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };