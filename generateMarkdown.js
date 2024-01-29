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
      
    case 'None':
      return '';
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

    const licenseLink = renderLicenseLink(license);
    return `## License
${licenseLink}

This project is licensed under the ${license} license.`
  }
}


function renderSection(name, section){
  console.log(section);
  if (section === ''){
    return '';
  } else {
    return `## ${name}
  \n${section}`
  }
}

function renderDescriptionSection(screenshot, section){
  if (screenshot === '' && section === ''){
    return '';
    } else {
      let description = `## Description
      \n${section}`
      if (screenshot!== ''){
        description +=  `\n\n![Screenshot](assets/${screenshot})`
      }
      return description;
  
  }
}

function renderLiveLink(link){
  console.log(link);
  if (link === ''){
    return '';
  } else {
    return `[Live Link](${link}`
}}

function renderQuestions(email, github, repo){
  if (email === '' && github === '' && repo === ''){
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
    if (repo!== ''){
      questions += `\n- [Repository](${repo})`
    }
    return questions;
  }
}

function renderTableofContents(description, installation, usage, license, tests, contribution, email, github, repo, screenshot) {
  if (installation === '' && usage === '' && description === '' && license === 'None' && tests === '' && contribution === '' && email === '' && github === '' && repo === '' && screenshot === '') {
    console.log('No table of contents rendered');
    return '';
  } else {
    let tableofContents = `## Table of Contents`;
    if (description !== '' || screenshot !== '') {
      tableofContents += `\n- [Description](#description)`;
    }
    if (installation !== '') {
      tableofContents += `\n- [Installation](#installation)`;
    }
    if (usage !== '') {
      tableofContents += `\n- [Usage](#usage)`;
    }
    if (license !== 'None') {
      tableofContents += `\n- [License](#license)`;
    }
    if (contribution !== '') {
      tableofContents += `\n- [Contributing](#contributing)`;
    }
    if (tests !== '') {
      tableofContents += `\n- [Tests](#tests)`;
    }
    if (email !== '' || github !== '' || repo !== '') {
      tableofContents += `\n- [Questions](#questions)`;
    }
    return tableofContents;
  }
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, livelink, screenshot, description, installation, usage, contribution, tests, license, github, email, repo}) => { 
  const liveLink = renderLiveLink(livelink)
  const licenseBadge = renderLicenseBadge(license);
  const descriptionSection = renderDescriptionSection(screenshot,description);
  const installationSection = renderSection('Installation',installation);
  const usageSection = renderSection('Usage',usage);
  const contributionSection = renderSection('Contributing',contribution);
  const testsSection = renderSection('Tests',tests);
  const tableofContents = renderTableofContents(description, installation, usage, license, tests, contribution, email, github, repo);
  const licenseSection = renderLicenseSection(license);
  const questions = renderQuestions(email, github, repo);


  return `# ${title} 
  ${licenseBadge}

${liveLink}

${tableofContents}

${descriptionSection}

${installationSection}

${usageSection}

${licenseSection}

${contributionSection}

${testsSection}

${questions}`
}


module.exports = {generateMarkdown};

