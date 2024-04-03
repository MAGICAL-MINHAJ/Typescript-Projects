import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];

async function createtodo(todos: string[]) {
  do {
    let welcome = console.log(
      chalk.yellowBright.bold(
        "\n\tWELCOME TO MINHAJ KHAN'S TO-DO LIST APP!!! \n\t"
      )
    );
    let opertion = await inquirer.prompt({
      type: "list",
      name: "operator",
      message: chalk.blueBright("What would you like to add?"),
      choices: ["Add", "View", "Update", "Delete"],
    });

    if (opertion.operator === "Add") {
      let add = await inquirer.prompt({
        type: "input",
        name: "additems",
        message: chalk.blueBright("Please add a task: "),
      });
      todos.push(add.additems);
      console.log(todos);
    }
    if (opertion.operator === "View") {
      console.log(todos);
    }

    if (opertion.operator === "Update") {
      let update = await inquirer.prompt({
        type: "list",
        name: "updateitems",
        message: chalk.blueBright("Select item to  update"),
        choices: todos,
      });
      let update2 = await inquirer.prompt({
        type: "input",
        name: "updateitems2",
        message: "Update item",
      });

      let newtodos = todos.filter((val) => val != update.updateitems);
      todos = [...newtodos, update2.updateitems2];
    }
    if (opertion.operator === "Delete") {
      let remove = await inquirer.prompt({
        type: "list",
        name: "removeitems",
        message: chalk.redBright("Select item to delete"),
        choices: todos,
      });
    }
  } while (true);
}

createtodo(todos);
