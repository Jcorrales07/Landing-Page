const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('.nav');

const openMenu = () => {
    menuBtn.style.display = 'none'
    nav.style.display = 'flex';
}

const closeMenu = () => {
    menuBtn.style.display = 'block'
    nav.style.display = 'none';
}

menuBtn.addEventListener('touchstart', openMenu);
closeMenuBtn.addEventListener('touchstart', closeMenu);

