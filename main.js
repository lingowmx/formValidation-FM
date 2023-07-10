const form = document.querySelector('.section-three__form');
const inputName = document.querySelector('.input-name');
const inputLastName = document.querySelector('.input-last-name');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const errorName = document.querySelector('.section-three__form__div__error--name');
const errorLastName = document.querySelector('.section-three__form__div__error--lastName');
const errorEmail = document.querySelector('.section-three__form__div__error--email');
const errorPassword = document.querySelector('.section-three__form__div__error--password');
const button = document.querySelector('.section-three__form__div--button');

button.addEventListener('click', (e) => {
    e.preventDefault(); 

    const emailExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let hasError = false;

    if(emailExp.test(inputEmail.value) === true){
        inputEmail.style.border = '1px solid hsl(154, 59%, 51%)';
        inputEmail.style.backgroundImage = 'url("")';
        errorEmail.innerHTML = '';
    }else{
        hasError = true
        inputEmail.style.border = '1px solid hsl(0, 100%, 74%)';
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")'
        errorEmail.innerHTML = 'Looks like this is not an email';
    }
    if(passwordExp.test(inputPassword.value) === true){
        inputPassword.style.border = '1px solid hsl(154, 59%, 51%)';
        inputPassword.style.backgroundImage = 'url("")';
        errorPassword.innerHTML = '';
    }else{
        hasError = true
        inputPassword.style.border = '1px solid hsl(0, 100%, 74%)';
        inputPassword.style.backgroundImage = 'url("./images/icon-error.svg")';
        errorPassword.innerHTML = 'password noooo';
    }
    if(inputName.value === ''){
        hasError = true;
        inputName.style.border = '1px solid hsl(0, 100%, 74%)';
        inputName.style.backgroundImage = 'url("./images/icon-error.svg")';
        errorName.innerHTML = 'First Name cannot be empty';
    }else{
        inputName.style.border = '1px solid hsl(154, 59%, 51%)';
    }
    if(inputLastName.value === ''){
        hasError = true;
        inputLastName.style.border = '1px solid hsl(0, 100%, 74%)';
        inputLastName.style.backgroundImage = 'url("./images/icon-error.svg")';
        errorLastName.innerHTML = 'Last Name cannot be empty';
    }else{
        inputLastName.style.border = '1px solid hsl(154, 59%, 51%)';
    }
    if(!hasError){
        form.submit();
        form.reset()
    }

})