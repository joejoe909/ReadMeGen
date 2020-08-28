var inquirer = require("inquirer");
var fs = require('fs');

function injectTC() {
    return `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#Questions)`
}

let questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please list the steps required for installation.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe your app/web page usage.",
    },
    {
        type:"input",
        name: "credits",
        message: "Please enter your credits list.",
    },
    {
        type:"checkbox",
        name: "license",
        message:"Please select your your license.",
        choices:["MIT","Apache","GPL"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any guidelines for interested contributors.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please explain testing that was performed to ensure proper operation."
    },
    {
        type:"input",
        name: "githubUn",
        message: "What is your GitHub user name?"
    },
    {
        type:"input",
        name: "email",
        message:"What is your email?",
    },
];

inquirer.prompt(questions).then((readMeObj)=>{
    const {title, description, installation, usage,
        credits, license, contributing, tests, githubUn, email} = readMeObj;
    
    fs.appendFile("ReadMe.md",
        "# " + title + "\n\n" + "![License]" +
        "(https://img.shields.io/badge/License-" + license + "-blue.svg \"License Badge\")" + "\n\n" +
        "## Description" + "\n\n" + description + "\n\n" +
        injectTC() + "\n\n" +  //inject table of contents
        "## Installation" + "\n\n" + installation + "\n\n" +
        "## Usage" + "\n\n" + usage + "\n\n" + 
        "## Credits" + "\n\n" + credits + "\n\n" +
        "## Contributing" + "\n\n" + contributing + "\n\n" +
        "## Questions" + "\n\n" +
        "### Please Contact: " + githubUn + " Email: " + email, function(err){
            if(err){
                return console.log(err);
            }
            console.log("Success!");
        });
});


