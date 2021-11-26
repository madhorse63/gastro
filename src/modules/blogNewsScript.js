import {blogNews} from './blogNewsInfo';

let cards = document.querySelectorAll('[data-id]');

const changeCards = (item) => {
    let dataId = item.dataset.id;
    let titleNews = item.querySelector('.card h3');
    let frontImgNews = item.querySelector('.card img');
    let publishDate = item.querySelector('.publication-date');
    let moreBtn = item.querySelector('.more-card-info');
    titleNews.innerText = blogNews[dataId].newsTitle;
    frontImgNews.src = `./images/food/blog/${dataId}/img1.jpg`;
    publishDate.innerText = blogNews[dataId].newsDate;

    const blogNewsRender = () => {
        let articleTitle = document.querySelector('.article h3');
        let articleDate = document.querySelector('.article .publication-date');
        let articleFirstImg = document.querySelector('.article .img1');
        let articleSecondImg = document.querySelector('.article .img2');
        let articleThirdImg = document.querySelector('.article .img3');
        let articleFirstText = document.querySelector('.article .block1');
        let articleSecondText = document.querySelector('.article .block2');
        let articleThirdText = document.querySelector('.article .block3');
        articleTitle.innerText = blogNews[dataId].newsTitle;
        articleDate.innerText = blogNews[dataId].newsDate;
        articleFirstImg.src = `./images/food/blog/${dataId}/img1.jpg`;
        articleSecondImg.src = `./images/food/blog/${dataId}/img2.jpg`;
        articleThirdImg.src = `./images/food/blog/${dataId}/img3.jpg`;
        articleFirstText.innerText = blogNews[dataId].newsText.block1;
        articleSecondText.innerText = blogNews[dataId].newsText.block2;
        articleThirdText.innerText = blogNews[dataId].newsText.block3;
    }

    moreBtn.addEventListener('click', blogNewsRender());
}



export {changeCards, cards};