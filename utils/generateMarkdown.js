const generateBadge = require('./generateBadge');
// const makeBadge = require('badge-maker');

// function to generate badge

// function to generate markdown for README
function generateMarkdown(data) {
  // const badge = );
  return `# ${data.title}
## Description
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.install}
  
  
  ## Usage
  ${data.usage}
  
  
  ## Credits
  ${data.contributer} 
  
  
  ## License
  This project is licensed under the terms of the ${data.license} license. 
  
  
  ## Badges
  
  ${generateBadge[data.license]}
  
  This file was created with the supper cool readme file generator you have heard so much about. 
  `;
}

module.exports = generateMarkdown;
