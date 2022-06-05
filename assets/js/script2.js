let fechar = document.getElementById('fechar');
let ajuda = document.getElementById('ajuda');
let fundo = document.getElementById('fundo');
let btFechar = document.getElementById('fechar2');
let btNovo = document.getElementById('novo');

fechar.addEventListener('click', function(){
    fundo.style.display = 'none';
});
ajuda.addEventListener('click', function(){
    fundo.style.display = 'flex';
});

btFechar.addEventListener('click', () => {
    window.location.href = 'index.html';
});

btNovo.addEventListener('click', () => {
    window.location.href = 'index.html';
});