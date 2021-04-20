//packages required
const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
{
    type: "input",
    message: "What is your name?",
    name: "name",
},
{
    type: "list",
    message: "What employee position do you want to add?",
    name: "position",
    choices: ["Intern", "Engineer", "Manager", "Done"]
}])
.then((answers) => {
console.log(answers)
});

    
