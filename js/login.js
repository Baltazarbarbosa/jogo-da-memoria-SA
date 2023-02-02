const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const inputTelefone = document.querySelector('.login__input__telefone');
const inputEmail = document.querySelector('.login__input__email');


const validainput = ({target}) => {

    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }

}

const enviarSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Nome', input.value);
    localStorage.setItem('Telefone', inputTelefone.value);
    localStorage.setItem('Email', inputEmail.value);

    window.location = 'pages/game.html';

}

input.addEventListener('input', validainput);
form.addEventListener('submit', enviarSubmit);