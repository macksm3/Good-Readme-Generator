const generateBadge = require('generateBadge');

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
  ${data.description}
  this is the supper cool readme file
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
 ${data.license}

 ## Badges

`;
}

module.exports = generateMarkdown;
