// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99JKEPOHjhNmwdnT93T3bF1vbDHn2uKA",
  authDomain: "postman-15fec.firebaseapp.com",
  projectId: "postman-15fec",
  storageBucket: "postman-15fec.firebasestorage.app",
  messagingSenderId: "850465849388",
  appId: "1:850465849388:web:95443ec29bc2ec3d5d1189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig