// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRSbRy1mjRNUA0-zZOsHb25_R06KuLSXI",
  authDomain: "io2022-jakarta.firebaseapp.com",
  databaseURL: "https://io2022-jakarta-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "io2022-jakarta",
  storageBucket: "io2022-jakarta.appspot.com",
  messagingSenderId: "151949261501",
  appId: "1:151949261501:web:0c3deee2ab78e74faf55d4",
  measurementId: "G-6QG188BJ12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
