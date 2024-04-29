// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {       type:"input",
            name : 'title',
            message: 'What is the title of your document?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe what this project is.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Summaraize the instructions for how to build this project'
        },
        {
           type: 'input',
           name: 'usage',
           message : 'Please describe the purpose and functionality of this project.'
           
        },
        {
            type:'input',
            name:'contributing',
            message: 'where there any contributers?'
        },
        {
            type: 'input',
            name: 'test',
            message : 'Tests?'

        },
        {
            type: 'checkbox',
            name: 'license',
            message : 'please select license applicable to this project.',
            choices: ['MIT','NONE']
         },
         {
            type: 'input',
            name: 'github',
            message : ['What is your Github username?']

         },
         {   type: 'input',
            name: 'email',
            message : ['what is your email']
        }
        

];


 // TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
     }
    
    
    // TODO: Create a function to initialize app
     function init() {
        inquirer.prompt(questions).then((responses) => {
            console.log('Creating Professional README.md File...');
            writeToFile("./final/README.md", generateMarkdown({ ...responses}));
        });
     }
    
     // Function call to initialize app
     init();
    




    // inquirer
    // .prompt (
    //     questions
    // )
    // .then ((answers) => {
    //     console.log(inquirer); use this to see if it worked
        
    // });
