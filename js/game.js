const grid = document.querySelector('.grid');
const fotos = [
    'atoll-fachada.jpg',
    'cinque-terre-fachada.jpg',
    'lodge-fachada.jpg',
    'Logo _Atoll.png',
    'LOGO EMIRATES - 01-01.png',
    'LOGO LODGE 02-1.png',
    'Logo Vero.png',
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

const checarCartas = () => {

    const primeiraCartaData = primeiraCarta.getAttribute('data-card');
    const segundaCartaData = segundaCarta.getAttribute('data-card');

    if (primeiraCartaData == 'atoll-fachada.jpg' && segundaCartaData == 'Logo _Atoll.png' || primeiraCartaData == 'Logo _Atoll.png' && segundaCartaData == 'atoll-fachada.jpg') {

        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
    } else if (primeiraCartaData == 'cinque-terre-fachada.jpg' && segundaCartaData == 'LOGO-CINQUE-TERRE-PNG.png' || primeiraCartaData == 'LOGO-CINQUE-TERRE-PNG.png' && segundaCartaData == 'cinque-terre-fachada.jpg') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';

    } else if (primeiraCartaData == 'lodge-fachada.jpg' && segundaCartaData == 'LOGO LODGE 02-1.png' || primeiraCartaData == 'LOGO LODGE 02-1.png' && segundaCartaData == 'lodge-fachada.jpg') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
    } else if (primeiraCartaData == 'Logo Vero.png' && segundaCartaData == 'vero-fachada.jpg' || primeiraCartaData == 'vero-fachada.jpg' && segundaCartaData == 'Logo Vero.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
    } else if (primeiraCartaData == 'LOGO EMIRATES - 01-01.png' && segundaCartaData == 'emirates-fachada.jpg' || primeiraCartaData == 'emirates-fachada.jpg' && segundaCartaData == 'LOGO EMIRATES - 01-01.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
    } else if (primeiraCartaData == 'Logo-Tai-2.png' && segundaCartaData == 'tai-fachada.jpg' || primeiraCartaData == 'tai-fachada.jpg' && segundaCartaData == 'Logo-Tai-2.png') {
        primeiraCarta.firstChild.classList.add('disable-card');
        segundaCarta.firstChild.classList.add('disable-card');
        primeiraCarta = '';
        segundaCarta = '';
    }

    else {
        setTimeout(() => {
            primeiraCarta.classList.remove('reveal-card');
            segundaCarta.classList.remove('reveal-card');
            primeiraCarta = '';
            segundaCarta = '';

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

loadGame();