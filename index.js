const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const nav = document.querySelector('.nav');

const liListShow = document.querySelectorAll('.list__item');

const menuExtension = (event) => {
    liListShow.forEach((li) => {

        if (li.querySelector('.list__show')) {
        
            li.addEventListener(event, () => {
                const lista = li.querySelector('.list__show');
                let listaHeight = lista.clientHeight;
    
                lista.style.height =
                    listaHeight == 0 ? 
                    `${lista.scrollHeight}px` : `0px`;
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

if(document.body.clientWidth < 1024) {
    menuExtension('touchstart')
} else menuExtension('click')


menuBtn.addEventListener('touchstart', openMenu);
closeMenuBtn.addEventListener('touchstart', closeMenu);
