import Toasty from "./toast.js";
const signInEmail = document.getElementById("signin-email");
const signInPass = document.getElementById("signin-password");
const signInBtn = document.getElementById("signin-btn");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");

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
        async function signIn() {
            signInToast.showAlert("Login Successful!", "green")
            localStorage.setItem("checkPage", 1) 
            await new Promise(resolve => setTimeout(resolve, 1000));
            window.location.href = 'index.html'
          }
          signIn();
    }
});