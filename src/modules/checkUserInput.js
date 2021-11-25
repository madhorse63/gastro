const inputFocus = (inputName, labelName) => {
        inputName.addEventListener('focus', () => {
            inputName.classList.add('inputFocus');
            labelName.style.color = "#64D370";
        });
        inputName.addEventListener('blur', () => {
            inputName.classList.remove('inputFocus');
            labelName.style.color = "#020202";
        });
        console.log(inputName.value)
}

let userName = document.querySelector('[name="user_name"]');
let userNameLabel = document.querySelector('[for="user_name"]');
let userPhone = document.querySelector('[name="user_phone"]');
let userPhoneLabel = document.querySelector('[for="user_phone"]');

export {inputFocus, userName, userNameLabel, userPhone, userPhoneLabel};