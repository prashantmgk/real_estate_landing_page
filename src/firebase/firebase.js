// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAExFN5IqhSslbQSCzk7YARl7e1IVXoS0s",
  authDomain: "indradhanush-investment.firebaseapp.com",
  projectId: "indradhanush-investment",
  storageBucket: "indradhanush-investment.appspot.com",
  messagingSenderId: "1001994471436",
  appId: "1:1001994471436:web:b0f518e20d067d889cc629",
  measurementId: "G-QE6MRHDKQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const propertyDB = getStorage(app);
export {app}