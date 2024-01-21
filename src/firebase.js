
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfftqYcTZnF9ubPNxxHMVXZT821R9eyeI",
  authDomain: "chat-app-33625.firebaseapp.com",
  projectId: "chat-app-33625",
  storageBucket: "chat-app-33625.appspot.com",
  messagingSenderId: "308380965576",
  appId: "1:308380965576:web:cfcb1d7409f900f7cea3fd",
  measurementId: "G-JL1VQ2P3X8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();