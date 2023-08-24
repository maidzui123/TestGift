import Toasty from "./toast.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const signInEmail = document.getElementById("signin-email");
const signInPass = document.getElementById("signin-password");
const signInBtn = document.getElementById("signin-btn");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");
const auth = getAuth();
signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var emailValueSI = signInEmail.value;
    var passwordValueSI = signInPass.value;
    const signInToast = new Toasty(toastHTMLElement, toastContent);
    if (
        signInEmail.value.trim().length == 0 ||
        signInPass.value.trim().length == 0
    ) {
        signInToast.showAlert("Something still empty :(", "red");
    } 
    else if(signInEmail.value != "ynhido@gmail.com" && signInPass.value != "yncute03092000")
    {
        signInToast.showAlert("Email or Password isn't correct :(", "red");
    }
    else {
       signInWithEmailAndPassword(auth, emailValueSI, passwordValueSI)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        async function signIn() {
          signInToast.showAlert("Login Successful!", "green")
          await new Promise(resolve => setTimeout(resolve, 1000)); 
          window.location.href = 'index.html'

        }
        signIn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        signInToast.showAlert("Email/Password is incorrect :(", "red")
      });
    }
});
