#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'enter the first number: '
    },
    {
        type: 'number',
        name: 'num2',
        message: 'enter the second number: '
    },
    {
        type: 'list',
        name: 'operator',
        message: 'select an operator: ',
        choices: ['add', 'subtract', 'multiply', 'divide']
    }
]);
let result;
switch (answer.operator) {
    case 'add':
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is: " + result);
        break;
    case 'subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is: " + result);
        break;
    case 'multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is: " + result);
        break;
    case 'divide':
        result = answer.num1 / answer.num2;
        console.log("The answer for division is: " + result);
        break;
}
