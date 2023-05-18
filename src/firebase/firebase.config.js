// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJyJJkLYOqmrnvVr5iVKwQ4etz8GUCWBY",
  authDomain: "toy-car-project.firebaseapp.com",
  projectId: "toy-car-project",
  storageBucket: "toy-car-project.appspot.com",
  messagingSenderId: "881913589132",
  appId: "1:881913589132:web:7470102c9a1592945c3aa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;