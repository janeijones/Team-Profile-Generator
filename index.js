//packages required
const fs = require('fs')
const inquirer = require('inquirer')
const employees = [];

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
            name: "newTeamMember",
            choices: ["Intern", "Engineer", "Exit"]
        }])
    .then((answers) => {
        console.log(answers)
        // const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrNumber)
        //employees.push(manager)
        // switch to show which questions user is prompted to do

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
                        // generateTheHTML(); 
                    }
                    // const intern = new Intern(internAnswers.intName, internAnswers.intId, internAnswers.intEmail, internAnswers.intSchool);
                    //employees.push(intern)

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
                        // generateTheHTML(); 
                    }
                    // const intern = new Intern(internAnswers.intName, internAnswers.intId, internAnswers.intEmail, internAnswers.intSchool);
                    //employees.push(intern)

                })

        }

        switch (answers.newTeamMember) {
            case 'Intern':
                askIntQuestions();
                break;
            case 'Engineer':
                askEngQuestions();
                break;
            default:
            // generateTheHTML();
        }
    });


