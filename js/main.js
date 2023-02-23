'use strict';

const numberSelection = document.querySelector(".js-number");
const buttonSelection = document.querySelector(".js-btn");
const messageAdvice = document.querySelector(".js-message");
const tryUser = document.querySelector(".js-try");
const number = getRandomNumber(100);
let attempts = 1;

function getRandomNumber(max) {
    const numberRandom = Math.ceil(Math.random() * max);
    return numberRandom; 
}  

function userMessage (message) {
    messageAdvice.innerHTML = message;
}

function useRandomNumber() {
    const userNumber = parseInt(numberSelection.value); 

    if (isNaN(userNumber)){
         userMessage("Introduzta un valor numérico.");
    }
    else if (userNumber > number) {
        userMessage("Demasiado alto.");
        if (userNumber > 100) {
            userMessage("El número debe esta entre 1 y 100.");
        }
    } else if (userNumber < number) {
       userMessage("Demasiado bajo.");
        if (userNumber < 1) {
            userMessage ("El número debe esta entre 1 y 100.");
        }
    } else if (userNumber === number) {
        userMessage("Has ganado campeona!!!");
    } 
     console.log(number);
}



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