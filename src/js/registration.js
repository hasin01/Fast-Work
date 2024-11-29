import { registerUser,  registrationUpdateUserProfile } from "./auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const stepwraper = document.querySelector(".registration-wraper-js");
const step2 = document.querySelector(".step-list");
const clasliststep1 = step2.children[1];
const clasliststep2 = step2.children[0];
const step2_desc = document.querySelector(".registration-desc");
const login = document.getElementById("login");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const submitgoogle = document.querySelector(".registration-button-google");
const formElement = document.querySelector(".registration-form-work-js");

function handleFormSubmit(e) {
  e.preventDefault();

  if (
    e.target.login.value === "" ||
    e.target.password.value === "" ||
    e.target.confirm_password.value === ""
  ) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }
  if (e.target.password.value !== e.target.confirm_password.value) {
    alert("Пароли не совпадают.");
    return;
  }

  registerUser(e.target.login.value, e.target.password.value);

  clasliststep2.classList.remove("step-item-active");
  clasliststep1.classList.add("step-item-active");
  step2_desc.textContent = "Заповнення акаунту";

  stepwraper.innerHTML = `
    <form class="registration-form-work profile-name-lastname-js" action="">
      <input
        class="registration-form-work-item"
        type="text"
        id="name"
        name="name"
        placeholder="Ваше Імʼя"
      />
      <input
        class="registration-form-work-item"
        type="text"
        id="surname"
        name="surname"
        placeholder="Ваше прізвище"
      />
      <input class="hover-button work-button" type="submit" value="Зареєструватись" />
    </form>
  `;

  const newProfileForm = document.querySelector(".profile-name-lastname-js");
  newProfileForm.addEventListener("submit", handleProfileSubmit);
}

function handleProfileSubmit(e) {
  e.preventDefault();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log("User ID:", user.uid);
    registrationUpdateUserProfile(user, e.target.name.value, e.target.surname.value);
    console.log(e.target.surname.value);
  } else {
    console.log("Пользователь не авторизован");
  }

  window.location.href = "/Fast-Work/";
}
formElement.addEventListener("submit", handleFormSubmit);


submitgoogle.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();

  console.log("user");
  const auth = getAuth();

  signInWithRedirect(auth, provider);
});

// export const getUserProfile = async (userId) => {
//   const db = getFirestore();
//   try {
//     const docRef = doc(db, "users", userId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const userData = docSnap.data();
//       console.log("Имя:", userData.displayName);
//       console.log("Фамилия:", userData.surname);
//       return userData;
//     } else {
//       console.log("Документ не найден");
//       return null;
//     }
//   } catch (error) {
//     console.error("Ошибка получения данных:", error);
//     return null;
//   }
// };
