// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1eynkuNJBeqpwYp5Sy51JrQteuJXFn8U",
    authDomain: "gift4u-ad6a8.firebaseapp.com",
    projectId: "gift4u-ad6a8",
    storageBucket: "gift4u-ad6a8.appspot.com",
    messagingSenderId: "734361371776",
    appId: "1:734361371776:web:b78e2849039a9c82bd1265",
    measurementId: "G-0LPEXNJDKG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);