const openModal = (modalWin, open, close) => {
    let modal = document.querySelector(modalWin);
    let openBtn = document.querySelectorAll(open);
    let closeBtn = document.querySelectorAll(close);
    openBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modal-hide');
            document.body.style.overflow = 'hidden';
        })
    });
    closeBtn.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('modal-hide');
            document.body.style.overflow = 'auto';
        })
    })    
}

export {openModal};