#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let loop = true;
while (loop) {
    let TODO = await inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What would you like to add in your todo's?"
        },
        { name: "addmore",
            type: "confirm",
            message: "Would you like to add more todo's?",
            default: "false"
        }
    ]);
    //Destructure:
    let { item, addmore } = TODO;
    console.log(TODO);
    loop = addmore;
    if (item) {
        todosList.push(item);
    }
    else {
        console.log("Kindly add Valid Input");
    }
    if (todosList.length > 0) {
        console.log("Here are your TODOS:");
        todosList.forEach(val => {
            console.log(val);
        });
    }
    else {
        console.log("No todos found in list.");
    }
}
let delItem = await inquirer.prompt([{
        name: "Q3",
        type: "confirm",
        message: "Would you like to remove something from todo's list?",
        default: false
    }]);
if (delItem.Q3 === true) {
    let deleted = await inquirer.prompt([{
            name: "Q4",
            type: "input",
            message: "What do you like to remove?"
        }]);
    todosList.pop();
    console.log("Updated TODOS:");
    todosList.forEach((j) => {
        console.log(j);
    });
}
