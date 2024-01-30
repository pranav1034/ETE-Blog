// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrp_pJFNCk6--NsYyYBhL8xHIx1Fm8PJ4",
  authDomain: "blogg-bfadd.firebaseapp.com",
  projectId: "blogg-bfadd",
  storageBucket: "blogg-bfadd.appspot.com",
  messagingSenderId: "926127748144",
  appId: "1:926127748144:web:b8c619b287a47d9a9969f5",
  measurementId: "G-950PFR18GW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
