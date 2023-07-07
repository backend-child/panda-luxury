import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjjhsIYVQnyX8K8E4QlWaxvTPbvGGEQ4w",
  authDomain: "house-marketplace-app-9aa55.firebaseapp.com",
  projectId: "house-marketplace-app-9aa55",
  storageBucket: "house-marketplace-app-9aa55.appspot.com",
  messagingSenderId: "1012275149147",
  appId: "1:1012275149147:web:fc5e5d4ee208b25920027e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
