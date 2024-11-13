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
  loop:true,
   centeredSlides: true, 
    spaceBetween: 10, 
    initialSlide:2,
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
    loop:true,
     centeredSlides: true, 
      spaceBetween: 10, 
      initialSlide:2,
  });

  document
  .querySelector(".custom-prev2")
  .addEventListener("click", () => swiper2.slidePrev());
document
  .querySelector(".custom-next2")
  .addEventListener("click", () => swiper2.slideNext());
