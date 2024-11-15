import "./swiper";



  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu-burder");
    const menuIcon = document.getElementById("menu-icon");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menu.style.display = 'none';
            menuIcon.src = '/Fast-Work/src/img/burg-menu.svg';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        } else {
            menu.style.display = 'flex';
            setTimeout(() => menu.classList.add('open'), 10); // Немного подождем, чтобы анимация сработала
            menuIcon.src = '/Fast-Work/src/img/burg-menu-clouse.svg';
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
