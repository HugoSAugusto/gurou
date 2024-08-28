document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navMenu = document.querySelector('nav ul');

    menuHamburger.addEventListener('click', () => {
        navMenu.classList.toggle('menu-active');
    });
});
