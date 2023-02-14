'use strict';

const numberSelection = document.querySelector(".js-number");
const buttonSelection = document.querySelector(".js-btn");
const messageAdvice = document.querySelector(".js-message");
const tryUser = document.querySelector(".js-try");

function getRandomNumber(max) {
    const numberRandom = Math.ceil(Math.random() * max);
    return numberRandom; 
}  

function useRandomNumber() {
    const userNumber = numberSelection.value; 
    const number = getRandomNumber(100);
    if (userNumber > number) {
        messageAdvice.innerHTML = "Demasiado alto.";
        if (userNumber > 100) {
            messageAdvice.innerHTML = "El número debe esta entre 1 y 100.";
        }
    } else if (userNumber < number) {
        messageAdvice.innerHTML = "Demasiado bajo.";
        if (userNumber < 1) {
            messageAdvice.innerHTML = "El número debe esta entre 1 y 100.";
        }
    } else if (userNumber === number) {
        messageAdvice.innerHTML = "Has ganado campeona!!!";
    } 
     console.log(number);
}

const countAttemps = getRandomNumber(100);
let attempts = 1;

function tryAgain() {
    const totalTries = attempts++;
    tryUser.innerHTML = `Número de intentos: ${totalTries}`;
} 

function handleClickButton(event) {
    event.preventDefault();
    useRandomNumber();
    tryAgain();
}

buttonSelection.addEventListener("click", handleClickButton);