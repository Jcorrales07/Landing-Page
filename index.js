const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('.nav');

console.log(nav);

menuBtn.addEventListener('touchstart', () => {
    // nav.classList.remove('mobile-device');
    // nav.classList.add('desktop-device');
    menuBtn.style.display = 'none'
    nav.style.display = 'flex';
});

closeMenuBtn.addEventListener('touchstart', () => {
    menuBtn.style.display = 'block'
    nav.style.display = 'none';
});
