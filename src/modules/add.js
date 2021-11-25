const addWrap = document.querySelectorAll('.add');
const btnToStorage = document.querySelectorAll('.arrange-wrap');

const addChange = () => {
    addWrap.forEach(item => {
        let current = item.querySelector('.amount');
        let currentNum = parseInt(current.innerText);
        item.addEventListener('click', e => {
            if(e.target.className === 'minus'){
                if(currentNum < 1){
                    return false;
                } else {
                    currentNum  = currentNum - 1;
                    current.innerText = currentNum;
                }                
            };
            if(e.target.className === 'plus'){
                currentNum  = currentNum + 1;
                current.innerText = currentNum;
            }
        });
    });
};

const addToStorage = () => {
    let cards = document.querySelectorAll('[data-search]');
    cards.forEach(item => {
        let title = item.querySelector('[data-title]');
        let titleName = title.innerText.trim();
        let titleData = title.dataset.title;
        let countData = item.querySelector('.amount').dataset.count;
        let count = item.querySelector('.amount').innerText;
        if(parseFloat(item.querySelector('.amount').innerText) > 0){
            console.log(titleName);
            localStorage.setItem(`${titleData}`, titleName);
            localStorage.setItem(`${countData}`, count);
        }
        let modalCards = document.querySelectorAll('.modal-card-wrap');
        modalCards.forEach(item => {
            let itemTitle = item.querySelector('.order-title');
            let itemCount = item.querySelector('.amount');
            if(itemTitle.innerText.trim() === 'Здесь пока пусто!'){
                itemTitle.innerText = localStorage.getItem(`${titleData}`);
                itemCount.innerText = localStorage.getItem(`${countData}`);
            }
        })
    })
};

export {btnToStorage, addChange, addToStorage};