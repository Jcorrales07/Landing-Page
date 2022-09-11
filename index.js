const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('.nav');
const liListShow = document.querySelectorAll('.list__item');

const menuExtension = (event = "click") => {
    liListShow.forEach((li, i) => {
        const listShow = li.querySelector('.list__show')
        const arrow = li.querySelector('.list__arrow')
        console.log(arrow)

        if (listShow) {
            li.addEventListener(event, () => {
                const listaHeight = listShow.clientHeight;
                const listScrollHeight = listShow.scrollHeight;
                arrow.classList.toggle('list__arrow--active');

                listShow.style.height = (listaHeight === 0) ? `${listScrollHeight}px` : `0px`;
                listShow.style.padding = (listaHeight === 0) ? `0.5rem 1.5rem 1.5rem 1.5rem` : `0px`;
            });
        }
    });
}

const openMenu = () => {
    menuBtn.style.display = 'none';
    nav.style.display = 'flex';
};

const closeMenu = () => {
    menuBtn.style.display = 'block';
    nav.style.display = 'none';
};

if(document.body.clientWidth < 1024) menuExtension('touchstart');
else menuExtension();

menuBtn.addEventListener('touchstart', openMenu);
closeMenuBtn.addEventListener('touchstart', closeMenu);
