// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license === 'None'){
    return '';
  } else {
    return `## License
    This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contribution, tests, license, github, email}) => { 
  const licenseSection = renderLicenseSection(license);

  return `# ${title} 

## Description
${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

${licenseSection}

## How to Contribute
${contribution}

## Tests
${tests}

## Questions
If you have any questions about this application, please contact me at ${email} or visit my Github profile at https://github.com/${github}`
}

function test(){
  console.log('test');
}

module.exports = {generateMarkdown,
    test};

