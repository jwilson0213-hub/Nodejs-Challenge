// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Project Description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Do you have any usage information?',
    },
    {
        type: 'input',
        name: 'require',
        message: 'Do you have any project dependencies?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the kind of license if applicable for your project.',
        choices: ['MIT', 'Apache 2.0', 'Boost 1.0', 'BSD 3.0', 'GPL 3.0', 'none' ],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub user name.'
    }
    {
        type: 'input',
        name: 'contribution',
        message: 'Do you have any contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'Do you have any test instructions?',
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(path.join(process.cwd(), fileName),data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {

        console.log("Making Professional README.md file");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses}));
    });
}

// Function call to initialize app
init();
