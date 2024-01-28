//Todo: Add options for generating live links, generate screenshot, and github link
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
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    console.log(licenseBadge, licenseLink);
    return `## License
${licenseBadge}

${licenseLink}

This project is licensed under the ${license} license.`
  }
}

function renderSection(name, section){
  console.log(section);
  if (section === ''){
    return '';
  } else {
    return `## ${name}`
  }
}

function renderQuestions(email, github){
  if (email === '' && github === ''){
    console.log('No questions rendered');
    return '';
  } else {
    let questions = `## Questions`
    if (email!== ''){
      questions += `\n- [Email](mailto:${email})`
    }
    if (github!== ''){
      questions += `\n- [GitHub](https://github.com/${github})`
    }
    return questions;
  }
}

function renderTableofContents(installation, usage, license){
  if ((installation === '' && usage === '') && license === 'None'){
    console.log('No table of contents rendered');
    return '';
  } else {
    let tableofContents = `## Table of Contents`
    if (installation !== ''){
      tableofContents += `\n- [Installation](#installation)`;
    }
    if (usage!== ''){
      tableofContents += `\n- [Usage](#usage)`;
    }
    if (license!== 'None'){
      tableofContents += `\n- [License](#license)`;
    }
    return tableofContents;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contribution, tests, license, github, email}) => { 
  const titleSection = renderSection(title);
  const descriptionSection = renderSection('Description',description);
  const installationSection = renderSection('Installation',installation);
  const usageSection = renderSection('Usage',usage);
  const contributionSection = renderSection('Contributing',contribution);
  const testsSection = renderSection('Tests',tests);
  const tableofContents = renderTableofContents(installation, usage, license);
  const licenseSection = renderLicenseSection(license);
  const questions = renderQuestions(email, github);

  return `# ${title} 

${descriptionSection}
${description}

${tableofContents}

${installationSection}
${installation}

${usageSection}
${usage}

${licenseSection}

${contributionSection}
${contribution}

${testsSection}
${tests}

${questions}`
}


module.exports = {generateMarkdown};

