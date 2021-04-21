//packages required
const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const heading = require('./src/heading.js')
const employees = [];

const questions = ([
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
        name: "newTeamMember",
        choices: ["Intern", "Engineer", "Exit"]
    }]);


const askIntQuestions = () => {

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
        {
            type: "list",
            message: "Select the employee position to add:",
            name: "newTeamMember",
            choices: ["Intern", "Engineer", "Exit"]
        },
    ])
        .then((internAnswers) => {

            if (internAnswers.newTeamMember === "Intern") {
                askIntQuestions();
            } else if (internAnswers.newTeamMember === "Engineer") {
                askEngQuestions();
            } else {
                console.log(employees);// generateTheHTML(); 
            }
            const intern = new Intern(internAnswers.intName, internAnswers.intId, internAnswers.intEmail, internAnswers.intSchool);
            employees.push(intern)

            fs.appendFileSync('./dist/sample.html', `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${intern.getName()}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email Address: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        </div>`, function (error) {
            console.log(error)
        })

        })

}

const askEngQuestions = () => {

    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's name:",
            name: "engName",
        },
        {
            type: "input",
            message: "Enter the engineer's ID:",
            name: "engId",
        },
        {
            type: "input",
            message: "Enter the engineer's email:",
            name: "engEmail",
        },
        {
            type: "input",
            message: "Enter the engineer's GitHub username:",
            name: "engGitHub",
        },
        {
            type: "list",
            message: "Select the employee position to add:",
            name: "newTeamMember",
            choices: ["Intern", "Engineer", "Exit"]
        },
    ])
        .then((engAnswers) => {

            if (engAnswers.newTeamMember === "Intern") {
                askIntQuestions();
            } else if (engAnswers.newTeamMember === "Engineer") {
                askEngQuestions();
            } else {
                console.log(employees);// generateTheHTML(); 
            }
            const engineer = new Engineer(engAnswers.engName, engAnswers.engId, engAnswers.engEmail, engAnswers.engGitHub);
            employees.push(engineer)

            fs.appendFileSync('./dist/sample.html', `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${engineer.getName()}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email Address: ${engineer.getEmail()}</li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
            </div>
            </div>`, function (error) {
                console.log(error)
            })

        })

};

// const createManager = (manager) => {
//     fs.appendFileSync('./dist/sample.html', `<div class="col-6">
//     <div class="card mx-auto mb-3" style="width: 18rem">
//     <h5 class="card-header">${manager.getName()}<br /><br />Manager</h5>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${manager.getId()}</li>
//         <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
//         <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
//     </ul>
//     </div>
// </div>`, function (error) {
// console.log(error)
// })
// }


function init() {
    inquirer.prompt(questions)
        .then((mgrAnswers) => {
            const manager = new Manager(mgrAnswers.mgrName, mgrAnswers.mgrId, mgrAnswers.mgrEmail, mgrAnswers.mgrNumber)
            employees.push(manager);
            heading();
            fs.appendFileSync('./dist/sample.html', `<div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${manager.getName()}<br /><br />Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
                        <li class="list-group-item">Phone Number: ${manager.getNumber()}</li>
                    </ul>
                    </div>
                </div>`, function (error) {
            console.log(error)
        })

            switch (mgrAnswers.newTeamMember) {
                case 'Intern':
                    askIntQuestions();
                    break;
                case 'Engineer':
                    askEngQuestions();
                    break;
                default:
                    console.log(employees);
                // generateHTML(employees);
            }

        })

}

init();
