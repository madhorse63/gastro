let userName = document.querySelector('[name="user_name"]');
let userNameLabel = document.querySelector('[for="user_name"]');
let userPhone = document.querySelector('[name="user_phone"]');
let userPhoneLabel = document.querySelector('[for="user_phone"]');

const inputFocus = (inputName, labelName) => {
        inputName.addEventListener('focus', () => {
            inputName.classList.add('inputFocus');
            labelName.style.color = "#64D370";
        });
        inputName.addEventListener('blur', () => {
            inputName.classList.remove('inputFocus');
            labelName.style.color = "#020202";
        });
}

const validPhone = () => {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    let valid = re.test(userPhone.value);
    if(valid) {
        localStorage.setItem('userPhone', userPhone.value)
    } else {
        alert('введите правильный номер телефона!');
    }
    return valid
}

let callOrderModalBtn = document.querySelectorAll('.callOrderModal');
const callOrderModal = () => {
        callOrderModalBtn.forEach(item => {
        item.addEventListener('click', () => {
            if(!isNaN(userName.value)){
                alert('Введите корректное имя!');
            } else {
                localStorage.setItem('userName', userName.value);
            }
            validPhone();
        })
    });
}

export {inputFocus, callOrderModal, userName, userNameLabel, userPhone, userPhoneLabel};