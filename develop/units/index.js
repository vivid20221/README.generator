// TODO: Include packages needed for this application (13) mini project  swap questions  

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
 inquirer 
  .prompt([
     {  
        type: 'input',
        name: 'name',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide.',
        
    },  
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'Usage',  
        message: 'Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:```md![alt text](assets/images/screenshot.png)```',

    },
    {
        type: 'input',
        name: 'credits',
        message: 'ist your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'input',
        name: 'license',
        

       

// TODO: Create a function to write README file
function readMe() { 
    fs.writeToFile(`README.file`, data) => {
    this.queue.pop();
    };
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();