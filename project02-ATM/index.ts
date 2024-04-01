#! /usr/bin/env mode
import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.yellowBright("\n \tWELCOME TO MINHAJ KHAN'S ATM MACHINE!!!\n\t ")
);

let myBalance = 50000; // in dollars.
let myPin = 1010; //pincode

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.blueBright("enter your pin please: "),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.greenBright("\nCorrect pin code.\n"));

  let OperationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "What would you like to do?",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(OperationAns);

  if (OperationAns.operation === "withdraw") {
    let withDrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdrawal method: ",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (withDrawAns.withdrawMethod === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: "Select amount: ",
          choices: [1000, 2000, 5000, 10000],
        },
      ]);
      if (fastCashAns.fastCash > myBalance) {
        console.log(chalk.redBright("Insufficient balance."));
      } else {
        myBalance -= fastCashAns.fastCash;
        console.log(`${fastCashAns.fastCash} withdrew successfully.`);
        console.log(`Your remaining balance is ${myBalance}`);
      }
    } else if (withDrawAns.withdrawMethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter your amount please: ",
          type: "number",
        },
      ]);

      if (amountAns.amount > myBalance) {
        console.log(chalk.redBright("Insufficient Balance."));
      } else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw successfully.`);
        console.log("Remaining balance is: " + myBalance);
      }
    }
  } else if (OperationAns.operation === "check balance") {
    console.log("Your current balance is: " + myBalance);
  } else {
    console.log(chalk.red("PIN is incorrect!!!"));
  }
}
