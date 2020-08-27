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
    let Title = JSON.stringify(readmeGen.title);
    Title = Title.slice(1, Title.length-1);
    Description = JSON.stringify(readmeGen.description);
    Description = Description.slice(1,Description.length-1);
    
    
    console.log(Title);
    fs.appendFile(file,
         "#" + Title + "\n" +
         "##Description" + "\n\n" +
         Description + "\n",function(err){
             if (err) {
                 return console.log(err);
             }
             console.log("Success!");
         }
    );
});
