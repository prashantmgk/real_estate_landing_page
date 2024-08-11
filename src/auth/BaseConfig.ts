import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAExFN5IqhSslbQSCzk7YARl7e1IVXoS0s",
   authDomain: "indradhanush-investment.firebaseapp.com",
   databaseURL: "https://indradhanush-investment-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "indradhanush-investment",
   storageBucket: "indradhanush-investment.appspot.com",
   messagingSenderId: "1001994471436",
   appId: "1:1001994471436:web:e7c6c8deb07b9bc69cc629",
   measurementId: "G-0VZ9R61KX9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);