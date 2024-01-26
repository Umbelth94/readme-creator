// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license === 'None'){
    return '';
  } else {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    console.log(licenseBadge, licenseLink);
    return `## License
${licenseBadge}

${licenseLink}

This project is licensed under the ${license} license.`
  }
}

function renderSection(section){
  console.log(section);
  if (section === ''){
    return '';
  } else {
    return `## ${section}`
  }
}

function renderTableofContents(installation, usage, license){
  if (installation && usage && license === ''){
    return '';
  } else {
    let tableofContents = `## Table of Contents`
    if (installation !== ''){
      tableofContents += `\n- [Installation](#installation)`;
    }
    if (usage!== ''){
      tableofContents += `\n- [Usage](#usage)`;
    }
    if (license!== ''){
      tableofContents += `\n- [License](#license)`;
    }
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contribution, tests, license, github, email}) => { 
  const titleSection = renderSection(title);
  const descriptionSection = renderSection(description);
  const installationSection = renderSection(installation);
  const usageSection = renderSection(usage);
  const contributionSection = renderSection(contribution);
  const testsSection = renderSection(tests);
  const tableofContents = renderTableofContents(installation, usage, license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title} 

${descriptionSection}
${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

${installationSection}
${installation}

${usageSection}
${usage}

${licenseSection}

${contributionSection}
${contribution}

${testsSection}
${tests}

## Questions
If you have any questions about this application, please contact me at <${email}> or visit my Github profile at https://github.com/${github}`
}


module.exports = {generateMarkdown};

