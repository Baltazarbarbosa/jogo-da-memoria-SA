const grid = document.querySelector('.grid');


const spanPlayer = document.querySelector('.player');
const spanFone = document.querySelector('.telefone');
const spanEmail = document.querySelector('.email');
const timer = document.querySelector('.timer');
const spanMovimentos = document.querySelector('.movimentos');
const spanAcertos = document.querySelector('.acertos');
const lista = document.querySelector('.lista');



const fotos = [
    'atoll-fachada.jpg',
    'cinque-terre-fachada.jpg',
    'lodge-fachada.jpg',
    'Logo_Atoll.png',
    'LOGOEMIRATES-01-01.png',
    'LOGOLODGE02-1.png',
    'LogoVero.png',
    'LOGO-CINQUE-TERRE-PNG.png',
    'Logo-Tai-2.png',
    'tai-fachada.jpg',
    'vero-fachada.jpg',
    'emirates-fachada.jpg'
];

const criarElemento = (tag, classe) => {

    const elemento = document.createElement(tag);
    elemento.className = classe;
    return elemento;

}

let primeiraCarta = '';
let segundaCarta = '';

const revealCard = ({ target }) => {

    if (target.className.includes('reveal-card')) return;

    if (primeiraCarta == '') {
        target.parentNode.classList.add('reveal-card');
        primeiraCarta = target.parentNode;
    } else if (segundaCarta == '') {
        target.parentNode.classList.add('reveal-card');
        segundaCarta = target.parentNode;
        checarCartas();
    }


}

const criarCartas = (fotos) => {

    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    front.style.backgroundImage = `url(../img/${fotos})`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-card', fotos);

    return card;
}

const checarFimDeJogo = () => {

    const cartas = document.querySelectorAll('.disable-card');

    if (cartas.length == 12) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de ${timer.innerHTML}`);

        localStorage.setItem('Nome', spanPlayer.innerHTML);
        localStorage.setItem('Telefone', spanFone.innerHTML);
        localStorage.setItem('Email', spanEmail.innerHTML);
        localStorage.setItem('Tempo', timer.innerHTML);
        localStorage.setItem('Movimentos', spanMovimentos.innerHTML);
        localStorage.setItem('Acertos', spanAcertos.innerHTML);
        

        window.location = 'ranking.html';
    }

}

const checarCartas = () => {

    const primeiraCartaData = primeiraCarta.getAttribute('data-card');
    const segundaCartaData = segundaCarta.getAttribute('data-card');

    if (primeiraCartaData == 'atoll-fachada.jpg' && segundaCartaData == 'Logo_Atoll.png' || primeiraCartaData == 'Logo_Atoll.png' && segundaCartaData == 'atoll-fachada.jpg') {

        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();
    } else if (primeiraCartaData == 'cinque-terre-fachada.jpg' && segundaCartaData == 'LOGO-CINQUE-TERRE-PNG.png' || primeiraCartaData == 'LOGO-CINQUE-TERRE-PNG.png' && segundaCartaData == 'cinque-terre-fachada.jpg') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();

    } else if (primeiraCartaData == 'lodge-fachada.jpg' && segundaCartaData == 'LOGOLODGE02-1.png' || primeiraCartaData == 'LOGOLODGE02-1.png' && segundaCartaData == 'lodge-fachada.jpg') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();
    } else if (primeiraCartaData == 'LogoVero.png' && segundaCartaData == 'vero-fachada.jpg' || primeiraCartaData == 'vero-fachada.jpg' && segundaCartaData == 'LogoVero.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();
    } else if (primeiraCartaData == 'LOGOEMIRATES-01-01.png' && segundaCartaData == 'emirates-fachada.jpg' || primeiraCartaData == 'emirates-fachada.jpg' && segundaCartaData == 'LOGOEMIRATES-01-01.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();
    } else if (primeiraCartaData == 'Logo-Tai-2.png' && segundaCartaData == 'tai-fachada.jpg' || primeiraCartaData == 'tai-fachada.jpg' && segundaCartaData == 'Logo-Tai-2.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
        const movimentos = Number(spanMovimentos.innerHTML);
        spanMovimentos.innerHTML = movimentos + 1;
        const acertos = Number(spanAcertos.innerHTML);
        spanAcertos.innerHTML = acertos + 1;

        checarFimDeJogo();
    }

    else {
        setTimeout(() => {
            primeiraCarta.classList.remove('reveal-card');
            segundaCarta.classList.remove('reveal-card');
            primeiraCarta = '';
            segundaCarta = '';
            const movimentos = Number(spanMovimentos.innerHTML);
            spanMovimentos.innerHTML = movimentos + 1;

        }, 500);
    }


}


const loadGame = () => {

    const embaralharArray = fotos.sort(() => Math.random() - 0.5);

    embaralharArray.forEach((fotos) => {
        const card = criarCartas(fotos);
        grid.appendChild(card);
    });

}

startTimer = () => {
    this.loop = setInterval(() => {
        const tempoCorrente = Number(timer.innerHTML);
        timer.innerHTML = tempoCorrente + 1;
    }, 1000);

}



window.onload = () => {



    spanPlayer.innerHTML = localStorage.getItem('Nome');
    spanFone.innerHTML = localStorage.getItem('Telefone');
    spanEmail.innerHTML = localStorage.getItem('Email');


    startTimer();



    loadGame();
}

