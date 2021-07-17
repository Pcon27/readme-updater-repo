// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = (data) =>
`# ${data.title}
### Author
 ${data.name}

[![License](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://opensource.org/licenses/${data.license})

---

# Table of Contents 
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#tests)
7. [License](#license)
8. [Contact](#contact)

---

## Description
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This application is using the ${data.license} license. 

## Contact
email: (${data.email})

Github: (https://github.com/${data.github})
    `;


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of this project?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
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
        type: 'input',
        name: 'contributing',
        message: 'how could/should one contribute to this application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how could I test this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what is the liscence for this application?',
        choices: ["MIT", "ISC", "IBM", "BDDL"]
    },
    {
        type: 'list',
        name: 'color',
        message: 'what color is the liscence for this application?',
        choices: ["blue", "green", "yellow", "red"]
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
    const mdPageContent = generateMarkdown(data)
    fs.writeFile('readme.md', mdPageContent, (err) =>
    err? console.log("error!") : console.log("successfully created reademe!")
    );
});
