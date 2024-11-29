import "./swiper";
import "./firebase"
import "./auth"
// import {  signOut } from "firebase/auth";

import burder_icon from '../img/burg-menu.svg';
import burder_clouse_icon from '../img/burg-menu-clouse.svg';
import { getAuth, signOut } from "firebase/auth";




  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu-burder");
    const menuIcon = document.getElementById("menu-icon");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {

    
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menu.style.display = 'none';
            menuIcon.src = burder_icon;
            overlay.style.display = 'none';
            document.body.style.overflow = '';

        } else {
            menu.style.display = 'flex';
            setTimeout(() => menu.classList.add('open'), 10); 
            menuIcon.src = burder_clouse_icon;
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        burger.classList.toggle('open');
    }; 

    burger.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", () => {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains('open')) {
            toggleMenu();
        }
    });
});



// import { getFirestore, doc, getDoc } from "firebase/firestore"; // Убедитесь, что у вас есть эти импорты

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





const auth = getAuth();



  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log("Пользователь вошел в систему")
document.querySelector(".nav-list").style.display = "flex"; 
    document.querySelector(".header-register-button").style.display = "none";
    const signOutbutn = document.querySelector(".sign-out");

signOutbutn.addEventListener("click", () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    window.location.href = "/Fast-Work/";

    }).catch((error) => {
    });
    
})

      
    } else {
    
      console.log("Пользователь не вошел в систему")
const hederRegisterButton = document.querySelector(".header-register-button")
    document.querySelector(".nav-list").style.display = "none";
    document.querySelector(".header-register-button").style.display = "block";

    


hederRegisterButton.addEventListener("click", () =>{
    window.location.href = "/Fast-Work/login.html";
})

    }
  });
