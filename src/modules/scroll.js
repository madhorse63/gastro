let btnPrograms = document.querySelectorAll('.programsBtn');
let btnGastro = document.querySelectorAll('.gastroBtn');
let btnAbout = document.querySelectorAll('.aboutBtn');
let btnBlog = document.querySelectorAll('.blogBtn');
let btnTop = document.querySelectorAll('.toTop');
let btnToOrder = document.querySelectorAll('.toOrder');
let btnToReg = document.querySelectorAll('.diet-btn-wrap');
let btnFaq = document.querySelectorAll('.faqBtn');

const smoothScroll = (elem) => {
    let element = document.querySelector(elem);
    let headerHeight = document.querySelector('header').offsetHeight;
    let elemTop = element.offsetTop;
    let scrolling = elemTop - headerHeight;
    window.scroll({
        left: 0,
        top: scrolling,
        behavior: 'smooth'
    })
}

export {btnPrograms, btnGastro, btnAbout, btnBlog, btnTop, btnToOrder, btnToReg, btnFaq, smoothScroll};