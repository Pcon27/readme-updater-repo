// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
import {generateMarkdown}from "homework/Develop/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'descibe this project in a few sentences',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how does one install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how does one use this application?',
    },
    {
        type: 'list',
        name: 'liscence',
        message: 'what is the liscence for this application?',
        choices: blank,
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how could/should one contribute to this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
];

// TODO: Create a function to write README file
inquirer
    .prompt(questions)

.then((data) => {
    fs.writeFile('readme.md', generateMarkdown(data))
});


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
