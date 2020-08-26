var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description."
    },

]).then(function (readmeGen) {
    var file = readmeGen.title.toLowerCase().split(' ').join('') + ".md";
    fs.appendFile(file,
         "#" + JSON.stringify(readmeGen.title) + "\n" +
         "##" + JSON.stringify(readmeGen.description) + "\n",function(err){
             if (err) {
                 return console.log(err);
             }
             console.log("Success!");
         }
    );
});
