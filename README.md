# ReadMe File Generator.
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)

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
I'll run us through the operation of the program. We answer the questions
and boom you no have a quality readme file that you can now push to github.  
You can view a sample <a href = "https://github.com/joejoe909/ReadMeGen/tree/master/sample%20ReadMe%20files"> here. </a>

<img src = "rmf.png">

## Installation

You need node.js and means to run the script either Git Bash or Vs Code or any other node.js enviorment. 

## Usage

You can watch the full video of the program in use <a href = "https://www.youtube.com/watch?v=ZzozOdS1iZw&feature=youtu.be"> here. </a>

<img src = "https://github.com/joejoe909/ReadMeGen/blob/master/img/rmgif.gif">

