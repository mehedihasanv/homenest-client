// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCbayv1l9HJUXL8_dazPYz1UJ2NcuG_DFs",
  authDomain: "realestates-66db3.firebaseapp.com",
  projectId: "realestates-66db3",
  storageBucket: "realestates-66db3.firebasestorage.app",
  messagingSenderId: "231151937080",
  appId: "1:231151937080:web:1b5a0419a8aee0326168cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);