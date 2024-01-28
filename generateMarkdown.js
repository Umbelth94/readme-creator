
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
  }
}


function renderLicenseSection(license) {
  console.log(license);
  if (license === 'None'){
    return '';
  } else {
    // const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    // console.log(licenseBadge, licenseLink);
    return `## License


${licenseLink}

This project is licensed under the ${license} license.`
  }
}


const generateMarkdown = ({title, description, installation, usage, contribution, tests, license, github, email}) => { 
  const licenseSection = renderLicenseSection(license);
  const licenseBadge = renderLicenseBadge(license);

  return `# ${title} 

${licenseBadge}

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
If you have any questions about this application, please contact me at <${email}> or visit my Github profile at https://github.com/${github}`
}

function test(){
  console.log('test');
}

module.exports = {generateMarkdown,
    test};

