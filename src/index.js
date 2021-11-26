import './style.css';
import {burger,ulMenu, closeBurger, showBurgerMenu, closeBurgerMenu, closeBurgerDoc} from './modules/burgerMenu';
import {openModal} from './modules/modals';
import {programsInfo} from './modules/programsInfo';
import {btnGastro, btnPrograms, btnAbout, btnBlog, btnTop, btnToOrder, btnToReg, btnFaq, smoothScroll} from './modules/scroll';
import {btnChoice, days, changeProgramDescr, dayColor, progrmasChoice} from './modules/programsChoice';
import {faqHoverImg, faqActive, faqChange} from './modules/faq';
import {cardsSwitcher} from './modules/blogSwitcher';
import {btnToStorage, addToStorage, addChange} from './modules/add';
import {inputFocus, callOrderModal, userName, userNameLabel, userPhone, userPhoneLabel} from './modules/checkUserInput'
export {blogNews} from './modules/blogNewsInfo';
import {changeCards, cards} from './modules/blogNewsScript';

burger.addEventListener('click', showBurgerMenu);
closeBurger.addEventListener('click', closeBurgerMenu);
document.addEventListener('click', closeBurgerDoc);

openModal('.article-modal', '.more-card-info', '.close-article');
openModal('.candy-items', '.more-candy', '.close-candy');
openModal('.form-modal', '.online-checkout-wrap', '.form-close');
openModal('.form-modal', '.phone-checkout-wrap', '.form-close');
openModal('.order-modal', '.arrangeLunch', '.order-close');
openModal('.order-modal', '.arrangeCandy', '.order-close');

changeProgramDescr();
dayColor();
progrmasChoice();

const mainScroll = (buttons, selector) => {
    buttons.forEach( item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(selector);
        })
    });
};

mainScroll(btnPrograms, '#programs');
mainScroll(btnGastro, '#gastroShop');
mainScroll(btnAbout, '#aboutUs');
mainScroll(btnBlog, '#blog');
mainScroll(btnTop, '#top');
mainScroll(btnToOrder, '.programs-choice_btn');
mainScroll(btnToReg, '.chekout_questions');
mainScroll(btnFaq, '.chekout_questions');

faqHoverImg();

days.forEach(day => {
    day.addEventListener('click', () => {
        progrmasChoice();
    });
});

btnChoice.forEach(diet => {
    diet.addEventListener('click', () => {
        progrmasChoice();
    })
});

cardsSwitcher();

addChange();

btnToStorage.forEach(button => {
    button.addEventListener('click', () => {
        addToStorage();
    });
});

document.querySelector('.cooperation').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Извините, здесь пока ничего нет!');
});

inputFocus(userName, userNameLabel);
inputFocus(userPhone, userPhoneLabel);

callOrderModal();

cards.forEach(item => {
    changeCards(item);
});