// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
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
    fs.writeFile('README.md', questions )
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
