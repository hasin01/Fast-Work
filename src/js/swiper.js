import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Подключаем инициализацию слайдеров


document.addEventListener("DOMContentLoaded", () => {

    const swiperContainer = document.querySelector(".swiper");
    const prevButton = document.querySelector(".custom-prev");
    const nextButton = document.querySelector(".custom-next");
    if (swiperContainer && prevButton && nextButton) {
      const swiper = new Swiper(".swiper", {
        modules: [Navigation],
        slidesPerView: 1.1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 2,
      });
  
      prevButton.addEventListener("click", () => swiper.slidePrev());
      nextButton.addEventListener("click", () => swiper.slideNext());
    }
  
    // Код для второго слайдера
    const swiper2Container = document.querySelector(".swiper2");
    const prevButton2 = document.querySelector(".custom-prev2");
    const nextButton2 = document.querySelector(".custom-next2");
    if (swiper2Container && prevButton2 && nextButton2) {
      const swiper2 = new Swiper(".swiper2", {
        modules: [Navigation],
        slidesPerView: 1.1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 2,
      });
  
      prevButton2.addEventListener("click", () => swiper2.slidePrev());
      nextButton2.addEventListener("click", () => swiper2.slideNext());
    }

    const swiper3Container = document.querySelector(".swiper3");
  
    if (swiper3Container) {
      const swiper3 = new Swiper(".swiper3", {
        modules: [Navigation],
        spaceBetween: 0,
        initialSlide: 0,
      });
  

    }
  });


  
  