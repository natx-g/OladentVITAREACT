// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvvzOJH6iv-kzyM6M8E0cOM0Mq4GzcCzw",
  authDomain: "login-oladent.firebaseapp.com",
  projectId: "login-oladent",
  storageBucket: "login-oladent.appspot.com",
  messagingSenderId: "192969009660",
  appId: "1:192969009660:web:56cdd59c1d5f0af4c4ea79"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase