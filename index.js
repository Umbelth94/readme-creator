// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err? console.log(err) : console.log('Success!'))
}

inquirer
.prompt([
   {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
   },
   {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.'
   },
   {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions.'
   },
   {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions.'
   },
   {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines.'
   },
   {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions.'
   },
   {
      type:'input',
      name:'email',
      message:'Please provide your email address.'
   },
   {
      type:'input',
      name:'github',
      message:'Please provide your GitHub username.'
   }
])
.then((data) => {
    const markdownContent = markdown.generateMarkdown(data);
    console.log(markdownContent);
      console.log(data);
      writeToFile('README.md', markdownContent);
  })
.catch((err) => console.log(err));



// TODO: Create a function to initialize app
function init() {
//     markdown.test();
//     inquirer
//       .prompt([
//          {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project?'
//          },
//          {
//             type: 'input',
//             name: 'description',
//             message: 'Please provide a description of your project.'
//          },
//          {
//             type: 'input',
//             name: 'installation',
//             message: 'Please provide installation instructions.'
//          },
//          {
//             type: 'input',
//             name: 'usage',
//             message: 'Please provide usage instructions.'
//          },
//          {
//             type: 'input',
//             name: 'contribution',
//             message: 'Please provide contribution guidelines.'
//          },
//          {
//             type: 'input',
//             name: 'test',
//             message: 'Please provide test instructions.'
//          },
//          {
//             type:'input',
//             name:'email',
//             message:'Please provide your email address.'
//          },
//          {
//             type:'input',
//             name:'github',
//             message:'Please provide your GitHub username.'
//          }
//       ])
//       .then((data) => {
//             console.log(data);
//             console.log(markdown.generateMarkdown(data));
//             // console.log(markdownContent);
//             writeToFile('README.md', markdownContent);
//         })
//       .catch((err) => console.log(err));
}

// Function call to initialize app
init();
