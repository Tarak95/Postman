// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkSSvxIUeYaqsCXO1sbyxz8WR_Cjbn9go",
  authDomain: "postman-4cea1.firebaseapp.com",
  projectId: "postman-4cea1",
  storageBucket: "postman-4cea1.firebasestorage.app",
  messagingSenderId: "435615165467",
  appId: "1:435615165467:web:b8eb411f21cc327b6adcbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig