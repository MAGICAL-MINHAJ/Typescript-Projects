#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWELCOME TO MY CLI NUMBER GUESSING GAME. \nNAME:MINHAJ KHAN\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter a number (1-5):  ",
    },
]);
if (answer.userGuessedNumber == randomNumber) {
    console.log("CONGRATS, YOU GUESSED THE CORRECT NUMBER!!!");
}
else {
    console.log("OOPS, IT IS NOT THE NUMBER!!!");
}
