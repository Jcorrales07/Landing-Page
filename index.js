const btnMobileMenu = document.querySelector('.mobile-btn');
const btnCloseMobileMenu = document.querySelector('.mobile-menu .close-btn');
const divMobileMenu = document.querySelector('.content-container .mobile-menu');

console.log(btnMobileMenu)
console.log(btnCloseMobileMenu)
console.log(divMobileMenu)

btnMobileMenu.addEventListener('touchstart', () => {
    divMobileMenu.style.display = 'block'
});

btnCloseMobileMenu.addEventListener('touchstart', () => {
    divMobileMenu.style.display = 'none'
});
