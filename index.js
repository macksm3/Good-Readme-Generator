// Good ReadMe generator 
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your app called?",
    },
    {
      type: "input",
      name: "description",
      message: "What does your app do?",
    },
    {
      type: "input",
      name: "install",
      message: "How is your app installed?",
      default: 'npm i',

    },
    {
      type: "input",
      name: "usage",
      message: "How is your app used?",
    },
    {
      // this should be choose from a list 
      type: "list",
      message: "What license will you use?",
      name: "license",
      default: '0',
      choices: [
        'MIT',
        'Apache',
        'GPL',
        'Public Domain',
      ],
    },
    {
      type: "input",
      name: "contributer",
      message: "What is your name?",
    }
  ]);
}

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
  return generateMarkdown(fileName);
}

function generateFile(answers) {
  return `
  App name is ${answers.title}
  and it ${answers.description}
  `;
}

// function to initialize program
async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();
    console.log(answers);

    const fileContent = writeToFile(answers);
    console.log(fileContent);

    await writeFileAsync("readthis.md", fileContent);

    // console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }

}

// function call to initialize program
init();

