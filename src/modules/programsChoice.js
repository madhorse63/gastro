import {programsInfo} from './programsInfo';

let btnChoice = document.querySelectorAll('.diet');
let days = document.querySelectorAll('.day');

const changeProgramDescr = () => {
    btnChoice.forEach(elem => {
        elem.addEventListener('click', (event) => {
            btnChoice.forEach(e => {
                e.classList.remove('diet-active');
            });
            if(event.target.closest('.diet') !== null){
                elem.classList.add('diet-active');
            };
            let title = elem.querySelector('.diet-name').textContent;
            let ccal = elem.querySelector('.diet-ccal').textContent;
            let changeTitle = document.querySelector('.inner-diet-description h2');
            let changeCcal = document.querySelector('.inner-diet-description span');
            let changeDescr = document.querySelector('.inner-diet-description p');
            let dietSale = document.querySelectorAll('.diet-sale');
            let newCost = document.querySelectorAll('.new-cost');
            changeTitle.textContent = title;
            changeCcal.textContent = ccal;
            programsInfo.forEach(item => {
                if(item.title === elem.id){
                    changeDescr.innerText = item.descr;
                    dietSale.forEach(i => {
                        i.innerText = item.cost.oldCost
                    });
                    for(let key1 in newCost){
                        for(let key2 in item.cost.saleCost){
                            if(newCost[key1].id === key2){
                                newCost[key1].innerText = item.cost.saleCost[key2];
                            }
                        }                       
                    }
                }
            })
        });
    });
};

const dayColor = () => {
    days.forEach(elem => {
        elem.addEventListener('click', (event) => {
            days.forEach(e => {
                e.classList.remove('diet-active');
            });
            if(event.target.closest('.day') !== null){
                elem.classList.add('diet-active');
            };
        });
    });
}

const progrmasChoice = () =>{
    let breakfastContent = document.querySelectorAll('.breakfast');
    let breakfast2Content = document.querySelectorAll('.breakfast2');
    let dinnerContent = document.querySelectorAll('.dinner');
    let afternoonContent = document.querySelectorAll('.afternoon');
    let supperContent = document.querySelectorAll('.supper');
    let arrContent = [breakfastContent, breakfast2Content, dinnerContent, afternoonContent, supperContent];

    arrContent.forEach(item => {
        let activeDiet = document.querySelector('.diet.diet-active').id;
        let activeDay = document.querySelector('.day.diet-active').id;
        programsInfo.forEach(num => {
            if(num.title === activeDiet){
                let breakfast = num[activeDiet].ration[activeDay].breakfast;
                let breakfast2 = num[activeDiet].ration[activeDay].breakfast2;
                let dinner = num[activeDiet].ration[activeDay].dinner;
                let afternoon = num[activeDiet].ration[activeDay].afternoon;
                let supper = num[activeDiet].ration[activeDay].supper;
                for(let key in item){
                    const filter = (par, index) => {
                        item[key].innerHTML = '';
                        for(let i = 0; i < par.length; i++){
                            let newContent = document.createElement('p');
                            newContent.classList.add('food-name');
                            newContent.innerText = par[i][index];
                            item[key].appendChild(newContent);
                        };
                    };
                    let currentClass = item[key].className;
                    switch(currentClass){
                        case 'food-name_container breakfast':
                            filter(breakfast, 0);
                            break;
                        case 'food-weight_container breakfast':
                            filter(breakfast, 1);
                            break;
                        case 'food-name_container breakfast2':
                            filter(breakfast2, 0);
                            break;
                        case 'food-weight_container breakfast2':
                            filter(breakfast2, 1);
                            break;
                        case 'food-name_container dinner':
                            filter(dinner, 0);
                            break;
                        case 'food-weight_container dinner':
                            filter(dinner, 1);
                            break;
                        case 'food-name_container afternoon':
                            filter(afternoon, 0);
                            break;
                        case 'food-weight_container afternoon':
                            filter(afternoon, 1);
                            break;
                        case 'food-name_container supper':
                            filter(supper, 0);
                            break;
                        case 'food-weight_container supper':
                            filter(supper, 1);
                            break;
                    }
                };
            };         
        });
    });
}



export {btnChoice, days, changeProgramDescr, dayColor, progrmasChoice};