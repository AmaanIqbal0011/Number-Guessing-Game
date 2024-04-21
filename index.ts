#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {name : "UserGueesedNumber",
        type : "number",
        message : "Please Guess a number Between 1 to 10:"
    }
]);
if (answer.UserGueesedNumber == randomNumber){
    console.log(`Congraulations Your'e Guessed Number ${answer.UserGueesedNumber} is 100% True.`);
}
else{
    console.log(` OOI,You lose the game, you gueesed number ${answer.UserGueesedNumber} is not match with computer gueesed number ${randomNumber}`)
};