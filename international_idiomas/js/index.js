const btnMenu = document.querySelector('#btn-menu');
const menuMobile = document.querySelector('#menu-mobile');
const btnClose = document.querySelector('#btn-close');

btnMenu.addEventListener('click', () => {
    menuMobile.style.width = '100%';
});

btnClose.addEventListener('click', () => {
    menuMobile.style.width = '0%';
});