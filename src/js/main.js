// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 1.1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  initialSlide: 2,
});

document
  .querySelector(".custom-prev")
  .addEventListener("click", () => swiper.slidePrev());
document
  .querySelector(".custom-next")
  .addEventListener("click", () => swiper.slideNext());

const swiper2 = new Swiper(".swiper2", {
  modules: [Navigation],
  slidesPerView: 1.1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  initialSlide: 2,
});

document
  .querySelector(".custom-prev2")
  .addEventListener("click", () => swiper2.slidePrev());
document
  .querySelector(".custom-next2")
  .addEventListener("click", () => swiper2.slideNext());

  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu-burder");
    const menuIcon = document.getElementById("menu-icon");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menu.style.display = 'none';
            menuIcon.src = './src/img/burg-menu.svg';
            overlay.style.display = 'none';
        } else {
            menu.style.display = 'block';
            setTimeout(() => menu.classList.add('open'), 10); // Немного подождем, чтобы анимация сработала
            menuIcon.src = './src/img/burg-menu-clouse.svg';
            overlay.style.display = 'block';
        }
        burger.classList.toggle('open');
    };

    burger.addEventListener("click", toggleMenu);
});
