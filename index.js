//packages required
const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
{ //prompted to enter name, employee id, email addy, office number
    type: "input",
    message: "Enter the team manager's name:",
    name: "mgrName",
},
{
    type: "input",
    message: "Enter the team manager's ID:",
    name: "mgrId",
},
{
    type: "input",
    message: "Enter team manager's email:",
    name: "mgrEmail",
},
{
    type: "input",
    message: "Enter the team manager's office number:",
    name: "mgrNumber"
},
{
    type: "list",
    message: "Select the employee position to add:",
    name: "position",
    choices: ["Intern", "Engineer", "Done"]
}])
.then((answers) => {
console.log(answers)

// switch to show which questions user is prompted to do

switch (answers.position) {
    case 'Intern':
        inquirer.prompt([
            {
                type: "input",
                message: "Enter the intern's name:",
                name: "intName",
            },
            {
                type: "input",
                message: "Enter the intern's ID:",
                name: "intId",
            },
            {
                type: "input",
                message: "Enter the intern's email:",
                name: "intEmail",
            },
            {
                type: "input",
                message: "Enter the intern's school:",
                name: "intSchool",
            },
        ])
        .then((engineerAnswers) => {
            console.log(answers);
            console.log(engineerAnswers);
        })
        break;
    case 'Engineer':

        break;
    default:
}
});

    
