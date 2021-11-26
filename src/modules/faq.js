let questions = document.querySelectorAll('.questions ul li');

const faqHoverImg = () => {
    questions.forEach(item => {
        let arrow = item.querySelector('img');
        let hiddenText = item.querySelector('.answer');
        item.addEventListener('mouseover', () => {
            arrow.src = './images/icons/white_arrow.svg';
            arrow.style.transform = 'rotate(90deg)';
            hiddenText.style.height = '150px';
            item.classList.add('active-question');
        });
        item.addEventListener('mouseout', () => {
            arrow.src = './images/icons/black_arrow.svg';
            arrow.style.transform = 'rotate(0deg)';
            hiddenText.style.height = '0px';
            item.classList.remove('active-question');
        });
    })
};

export {faqHoverImg};