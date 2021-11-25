let burger = document.querySelector('#burger');
let ulMenu = document.querySelector('.menu ul');
let closeBurger = document.querySelector('#close');

const showBurgerMenu = () => {
    ulMenu.classList.add('show');  
    ulMenu.style.top = '0';
    burger.style.display = 'none';
    closeBurger.style.display = 'block';
}

const closeBurgerMenu = () => {
    ulMenu.classList.remove('show');
    ulMenu.style.top = '-55vh';
    burger.style.display = 'block';
    closeBurger.style.display = 'none';
}

const closeBurgerDoc = (e) => {
    if(ulMenu.className === 'show'){
        if(e.target.closest('.header-wrap') === null){
            closeBurgerMenu();
        }
    }
}

export {burger,ulMenu, closeBurger, showBurgerMenu, closeBurgerMenu, closeBurgerDoc}

