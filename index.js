var inquirer = require("inquirer");
var fs = require('fs');

function injectTC() {
    return `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#Questions)`
}

function injectLic(Lic){
    let shieldGPL = "https://img.shields.io/badge/license-GPL-green";
    let sheildMIT = "https://img.shields.io/badge/license-MIT-green";
    let sheildApch = "https://img.shields.io/badge/license-apache-green";
    if(Lic === GPL){
       return shieldGPL;
    }else if(Lic === MIT){
        return sheildMIT;
    }else if(Lic === sheildApch){
        return sheildApch;
    }
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
        choices:["MIT","Apache","GPL"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any guidelines for interested contributors.",
    },
];

inquirer.prompt(questions).then((readMeObj)=>{
    const {title, description, installation, usage,
        credits, license, contributing} = readMeObj;

    lic = injectLic(license);    

    fs.appendFile("ReadMe.md",
        "# " + title + "\n\n" +
        "## Description" + "\n\n" + description + "\n\n" +
        injectTC() + "\n\n" +
        "## Installation" + "\n\n" + installation + "\n\n" +
        "## Usage" + "\n\n" + usage + "\n\n" + 
        "## Credits" + "\n\n" + credits + "\n\n" +
        "## License" + "\n\n" + lic + "/" + "\n\n" +
        "## Contributing" + "\n\n" + contributing, function(err){
            if(err){
                return console.log(err);
            }
            console.log("Success!");
        });
});


