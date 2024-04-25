// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsFRYnXoMRmK2bczCKiq7GZE2xsXa3XXo",
  authDomain: "art-craft-store-client-a866e.firebaseapp.com",
  projectId: "art-craft-store-client-a866e",
  storageBucket: "art-craft-store-client-a866e.appspot.com",
  messagingSenderId: "322707589217",
  appId: "1:322707589217:web:9abcc297526592eafc8220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;