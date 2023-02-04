function adicionar(){

    let list = document.getElementsByClassName('lista').innerHTML;

    const text = [localStorage.getItem('Nome'), localStorage.getItem('Telefone'), localStorage.getItem('Email'), localStorage.getItem('Tempo'), localStorage.getItem('Movimentos')]
    

    list += '<li>'+text+'</li>';

    document.getElementsByClassName('lista').innerHTML = list;
}

adicionar();