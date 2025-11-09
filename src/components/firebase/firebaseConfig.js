// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCce5s4HAYcZ6b2mFxjz9-bO0b6xAzZblU",
  authDomain: "postman-278d3.firebaseapp.com",
  databaseURL: "https://postman-278d3-default-rtdb.firebaseio.com",
  projectId: "postman-278d3",
  storageBucket: "postman-278d3.firebasestorage.app",
  messagingSenderId: "110096099675",
  appId: "1:110096099675:web:d6e87340b2a1926cc5127e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig