//TODO: To Do :Record usage and installation of the app.  Try to work out the kinks on the optional-render branch.  
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err? console.log(err) : console.log('Success!'))
}

function init() {
   const questions = [
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your project?'
      },
      {
         type:'input',
         name: 'livelink',
         message:'What is the link to your live site?'
      },
      {
         type: 'input',
         name: 'description',
         message: 'Please provide a description of your project.'
      },
      {
         type:'input',
         name:'screenshot',
         message:'Please provide the image name and file extension of your screenshot (i.e. screenshot.jpeg), make sure that it is in an assets folder'
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
         name: 'tests',
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
      },
      {
         type:'input',
         name:'repo',
         message:'Please provide a link to your Github repository'
      },
      { type:'list',
   name:'license',
   choices:['MIT','Apache 2.0','GPL 3.0','BSD 3','None']}
   ];

inquirer
   .prompt(questions)
   .then((data) => {
      console.log(data.license)
      const markdownContent = markdown.generateMarkdown(data);
      console.log(markdownContent);
         console.log(data);
         writeToFile('README-Template.md', markdownContent);
   })
   .catch((err) => console.log(err));
}

// Function call to initialize app
init();
