// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtnsvm1A0M103Ex-Wcq8jHKxl3B5yxQSk",
  authDomain: "helpify-d07fb.firebaseapp.com",
  projectId: "helpify-d07fb",
  storageBucket: "helpify-d07fb.appspot.com",
  messagingSenderId: "98864670529",
  appId: "1:98864670529:web:524634b9965fc62487e3c0",
  measurementId: "G-EQH98XHNGK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);