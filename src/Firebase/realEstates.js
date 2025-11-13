import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbayv1l9HJUXL8_dazPYz1UJ2NcuG_DFs",
  authDomain: "realestates-66db3.firebaseapp.com",
  projectId: "realestates-66db3",
  storageBucket: "realestates-66db3.firebasestorage.app",
  messagingSenderId: "231151937080",
  appId: "1:231151937080:web:1b5a0419a8aee0326168cd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);