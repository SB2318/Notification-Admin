
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBuKnGJnFcFvhu4CAzzanHQoLxvuqYOo",
  authDomain: "androidnotification-7bbac.firebaseapp.com",
  databaseURL: "https://androidnotification-7bbac-default-rtdb.firebaseio.com",
  projectId: "androidnotification-7bbac",
  storageBucket: "androidnotification-7bbac.appspot.com",
  messagingSenderId: "457160157487",
  appId: "1:457160157487:web:d38d80803f7ebe061a19da",
  measurementId: "G-KVGMH4VKRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Store the login session
//auth.Auth.Persistentce.LOCAL;

$("#btn_login").click(function(){

    //alert("You Clicked");
    var email= $("#email").val()
    var password= $("#password").val()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    });
});