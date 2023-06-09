// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_VITE_PEOJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
 appId: import.meta.env.VITE_APPID


//  apiKey: "AIzaSyAvo9WiyyHWqhlm6hQnkviRv_lrd_-ryZ4",
//   authDomain: "milestone-12-e2b37.firebaseapp.com",
//   projectId: "milestone-12-e2b37",
//   storageBucket: "milestone-12-e2b37.appspot.com",
//   messagingSenderId: "1024107787228",
//   appId: "1:1024107787228:web:b987c3519fb1cc4a36d519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;