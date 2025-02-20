const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.main-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
