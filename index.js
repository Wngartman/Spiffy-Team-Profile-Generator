/* eslint-disable no-undef */
// Importing required npm packages and questions
const fs = require('fs');
const inquirer = require('inquirer');
const { managerQuestions, internQuestions, mainQuestions, engineerQuestions } = require('./lib/Questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const buildHtml = require('./lib/buildHtml');
const employeeArray = [];

// Calls and prompts the questions for the manager position then pushes the answer to the employee array
const newManager = () => {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            const teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
            employeeArray.push(teamMember)
            console.log("New Manager Added!")
            main()
        });
}
// Calls and prompts the questions for the intern position then pushes the answer to the employee array
const newIntern = () => {
    inquirer.prompt(internQuestions)
    .then(answers => {
        const teamMember = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArray.push(teamMember)
        main() 
    });
}
// Calls and prompts the questions for the engineer position then pushes the answer to the employee array
const newEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then(answers => {
            const teamMember = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeeArray.push(teamMember)
            console.log("New Engineer Added!")
            main()
        });
}
// Writes a HTML file with the info provided by the employeeArray
const createHtml = () => {
    console.log('Page Created');
    fs.writeFile('./dist/index.html', buildHtml(employeeArray), (err) => {
        if (err) throw err;
    });
}
// Main menu questions
const main = () => {
    inquirer.prompt(
        mainQuestions

    ).then(answers => {
        switch (answers.role) {
            case 'Manager':
                newManager()
                break;
            case 'Engineer':
                newEngineer()
                break;
            case 'Intern':
                newIntern()
                break;
            case 'Create HTML Page':
                createHtml()
        }
    })
}

main()