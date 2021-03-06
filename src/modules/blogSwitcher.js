const cardsSwitcher = () => {    
    let switcher = document.querySelectorAll('.cards-switcher ul');
    let nextPage = document.querySelectorAll('.next-page');
    let prevPage = document.querySelectorAll('.prev-page');

    nextPage.forEach(item => {
        item.addEventListener('click', () => {
            let activePage = document.querySelectorAll('.currentPageMarker');
            activePage.forEach(elem => {
                elem.nextElementSibling.classList.add('currentPageMarker');
                elem.classList.remove('currentPageMarker');
            });
            renderCards();
        });
    });
    prevPage.forEach(item => {
        item.addEventListener('click', () => {
            let activePage = document.querySelectorAll('.currentPageMarker');
            activePage.forEach(elem => {
                elem.previousElementSibling.classList.add('currentPageMarker')
                elem.classList.remove('currentPageMarker');
            });
            renderCards();
        });
    });

    switcher.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.className === 'pageNum'){
                let switcherBtns = item.querySelectorAll('li');
                let currentPageDataName = e.target.dataset.page;
                let allPages = document.querySelectorAll('[data-page]');
                switcherBtns.forEach(btn => {
                    btn.classList.remove('currentPageMarker');
                })
                e.target.classList.add('currentPageMarker');
                allPages.forEach(elem => {
                    elem.classList.remove('currentPageMarker');
                    if(elem.dataset.page === currentPageDataName){
                        elem.classList.add('currentPageMarker');
                    }
                })
            }
            renderCards();
        })
    });

    const renderCards = () => {
        let activePage = document.querySelectorAll('.currentPageMarker');
        let cards = document.querySelectorAll('[data-id]');
        cards.forEach(item => {
            item.dataset.id = 'news3';
        })
    }
}

export {cardsSwitcher};