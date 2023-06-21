// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeRkA1wbQzUSE9q06swqnDvzywyjNeZLA",
  authDomain: "coder-react-276ff.firebaseapp.com",
  projectId: "coder-react-276ff",
  storageBucket: "coder-react-276ff.appspot.com",
  messagingSenderId: "313009180553",
  appId: "1:313009180553:web:ef70f5e25a0ba288225b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear la instancia de la base de datos
export const db = getFirestore(app)