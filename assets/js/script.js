const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let tentativas = 0;
let acertos = 0;
let numMaxTentativas = 4;
let maxAcertos = 6;
let spanTentativa = document.getElementById('tentativa');
let spanAcerto = document.getElementById('acerto');
let fundo2 = document.getElementById('fundo2');
let resultado = document.getElementById('resultado');
let text_ok = document.querySelectorAll('.text-ok');

function flipCard(){
    if(lockBoard == true) return;
    if(this === firstCard) return;
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        firstCard.classList.add('flip');
        return;
    }
    secondCard = this;
    secondCard.classList.add('flip');
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){ //compara o atributo data-card do primeiro com o do segundo
        disableCards();
        return;
    }
    unflipCard();
}

function disableCards(){
    acertos += 1;
    spanAcerto.innerHTML = acertos;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    setTimeout(() => {
        if(acertos == maxAcertos){            
            fundo2.style.display = 'flex';
            fundo2.classList.add('opfundo01');
        }
    }, 1000);
}



function unflipCard(){
    tentativas += 1;
    spanTentativa.innerHTML = tentativas;
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        if(tentativas == numMaxTentativas){
            fundo2.style.display = 'flex';
            text_ok[0].innerHTML = 'Você perdeu... :-(<br><br>Infelizmente você excedeu o número máximo de tentativas. <br>Você acertou: '+acertos+"... <br>Tente novamente, dessa vez você se sairá melhor. ;-)";
        }
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})(); //Immediately Invoked Function

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});