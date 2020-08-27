var inquirer = require("inquirer");
var fs = require('fs');

function injectTC() {
    return TC = `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`
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
        type:"input",
        name: "license",
        message:"Enter your license information.",
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter any guidelines for interested contributors.",
    },
];

inquirer.prompt(questions).then((readMeObj)=>{
    const {title, description, installation, usage,
        credits, license, contribute} = readMeObj;

    fs.appendFile("ReadMe.md",
        "# " + title + "\n\n" +
        "## Description" + "\n\n" + description + "\n\n" +
        injectTC() +
        "## Installation" + "\n\n" + installation + "\n\n" +
        "## Usage" + "\n\n" + usage + "\n\n" + 
        "## Credits" + "\n\n" + credits + "\n\n" +
        "## License" + "\n\n" + license + "\n\n" +
        "## Contribute" + "\n\n" + contribute, function(err){
            if(err){
                return console.log(err);
            }
            console.log("Success!");
        }
        );


});


