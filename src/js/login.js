import { loginUser } from "./auth";

const formlogin = document.querySelector(".login-form-js");

const butonRegister = document.querySelector(".button-login-registration");

const hendeleFormSubmit = (e) => {
  e.preventDefault();
  if (
    e.target.login.value === "" ||
    e.target.password.value === "" 
  
  ) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  loginUser(e.target.login.value, e.target.password.value);
};

formlogin.addEventListener("submit", hendeleFormSubmit);

butonRegister.addEventListener("click", () => {
  window.location.href = "registration.html";
});

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const submitgoogle = document.querySelector(".registration-button-google");

submitgoogle.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithRedirect(auth, provider).catch((error) => {
    console.error("Error during sign-in with redirect:", error);
  });
});


