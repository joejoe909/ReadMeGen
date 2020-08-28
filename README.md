# ReadMe File Generator.
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#Questions)

## Description

Hello and welcome to my GitHub readme file generator.
It's a program that was written using Node.Js and Javascript.
It's designed to facilitate the creation of GitHub readme files
and automatically produces the necessary markdown  characters to produce
a quality readme file. 

The program depends on inquirer and utilizes node.js file system to 
stream user information to disk.

To display some of the code we first create an array and this holds 
the questions and declares the variables passed to it by the user, when
the user answers the questions.

we then implement this array in the inquirer prompt. once it's done we
utilize destructuring to create individual variables that we pass into 
a function that generates a string based on the destructured variables
and inserts the necessary markdown characherts. here is were we also 
inject the table of contents. once it's done the file generated. So
I'll run us through the operation of the program.

we answer the questions

and boom here is our readme file that we can now push to github.  

## Installation

You need node.js and means to run the script either Git Bash or Vs Code or any other node.js enviorment. 

## Usage

Go through the prompt answer the questions and it will produce your readme.md file.

<img src = "https://github.com/joejoe909/ReadMeGen/blob/master/img/rmgif.gif">

##Questions.

na.
