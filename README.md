<<<<<<< HEAD
# Career Exploration Program - 2019 Software Engineering Application Project

Welcome to the application for the CEP Software Engineer track! In this assignment, you'll create a simple "About Me" app using [HTML](https://websitesetup.org/HTML5-cheat-sheet.pdf), [CSS](https://makeawebsitehub.com/css3-mega-cheat-sheet/), and [JavaScript](https://www.cheatography.com/davechild/cheat-sheets/javascript/) / [jQuery](https://oscarotero.com/jquery/).

## Getting Started

To complete the application and submit it, follow the instructions below.

### Creating your Github account

To get started, go to [Github.com](www.github.com) and sign up for an account. If you're unfamiliar with Github, it may be worthwhile to check out this short [article](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/) to familiarize yourself with some of the terminology.

This is where you will store your finished application. When you're done with the project, you will submit the link to your repo.

### Downloading a code editor

You'll need a code editor in order to complete the project. There are many out there - [Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/) etc. If you have a preference, feel free to use it. If not, [VSCode](https://code.visualstudio.com/) is a good choice. Choose your favorite and download it.

### Downloading a terminal app **(Windows Only)**

All *Windows* users will need to download [bash](https://git-scm.com/download/win) for Windows to function as their terminal application (Macs come with "Terminal" pre-installed).

### Cloning the repo

You will need to clone this [repo](https://github.com/ideascomealive/cep-engr-app).

1. Open up your terminal/bash. For Mac can do this with command + space bar and then type 'terminal'. For Windows press the windows key and type 'bash'.
2. You can find out the location of your current working directory by typing in `pwd`.
3. Let's create a new directory to store your coding projects in. Type in `mkdir Projects`.
4. Type in `ls` and you will see that a new directory called 'Projects' was created.
5. Switch into that directory by typing in `cd Projects`.
6. If you type in `ls` again, you'll notice that the folder is empty.
7. Let's add our first repo to the Projects directory. Navigate to the [repo](https://github.com/ideascomealive/cep-engr-app) in your browser.
8. In the top right corner, click on the button that says "Fork" and then select your github.
9. Click on the green button that says "Clone or download" and copy the link.
10. On the command line, type in `git clone INSERT LINK` replacing the `INSERT LINK` with the link you just copied.
8. Once it's downloaded, if you type in `ls` again, you'll notice that your project was added to the directory.
9. Navigate into that project by typing `cd cep-engr-app`.
10. Open up the project with your code editor.

## Core Instructions

 For an example project, check out [example.gif](example.gif) in the root directory.

 All of your files are in the `src` directory. You'll see that you have one file for HTML, one for CSS, and one for JavaScript. You also have an `img` directory to store any images that you use.

 Here are the mandatory guidelines:

 - Include a header with an image as the background
 - Include an `h1` with a title for your website
 - Include an image. It can be anything -- a headshot, a picture of your favorite memory, a picture of your last trip, etc.
 - Include 5 buttons - First Name, Last Name, Job Title, Home Office, and Tell Me More
 - Create a JavaScript object in the `init.js` file with the following fields: firstName, lastName, jobTitle, homeOffice, tellMeMore
 - Using jQuery, as the user clicks on the button, reveal the appropriate information using the values from the JS object

 Feel free to take creative license however you want! The point of the exercise is to get a sense that you know the basics of HTML, CSS, and JS, but your page does not need to look like the example.

## Attempt to Complete at Least 1 Challenge Below:

- Publish your website using github pages. [Github Pages](https://pages.github.com/)
- Pull in data from a public api:
  1. Find and signup for a free api. [List of Public Api's](https://github.com/toddmotto/public-apis)
  2. Using [Ajax](https://www.tutorialspoint.com/jquery/jquery-ajax.htm) or the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) successfully pull in [json](https://beginnersbook.com/2015/04/json-tutorial/) data to your project.
  3. Using javascript or jQuery, render the data to the page in a user friendly interface.
  - HINT - Not all API's are easy to work with or even functional.
  - HINT - Only work with API's that have CORS (Cross-origin Resource Sharing) enabled.
- Extend your design to make it as stylish as possible:
  - Draw inspiration from your favorite websites or visit [awwards](https://www.awwwards.com/) to get inspired.
  - Find a fun or interactive [jQuery plugin](https://www.jqueryscript.net/jquery-plugins/) and implement it.
  - Think outside the box and push yourself to build something eye catching, interactive and fun.

## Finishing up

 Once you've completed the above core instructions, you'll need to push up your work to your github repo!

 - On the terminal/bash, type in `git status`. You'll see all of the files that you have created or changed.
 - Type in `git add .` to add all of those files to your commit.
 - Type in `git commit -m "MESSAGE"` replacing `MESSAGE` with your commit message.
 - Type in `git push origin master` to push up all of your work.

## Resources

### HTML & CSS
[Codecademy course](https://www.codecademy.com/catalog/language/html-css)
[HTML Essential Training](https://www.lynda.com/HTML-tutorials/HTML-Essential-Training/170427-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3ahtml%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)

### JavaScript
[Codecademy course](https://www.codecademy.com/catalog/language/javascript)
[JavaScript Essential Training](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html?srchtrk=index%3a9%0alinktypeid%3a2%0aq%3abeginner+web+development%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
[Learn jQuery](https://learn.jquery.com/)

## Support
Please join the #cep-engr-2019 Slack channel. If you get stuck with any of the pre-work, feel free to reach out here. This channel has your fellow cohort mates, as well as current engineers who are happy to help you get unstuck.
=======
# Instructions for cloning repo
``` Select Clone/Download
 Copy the SSH
 Create folder on your personal computer 
 from the command line
 run 'cd {your folder path}'
 run 'git clone {paste SSH here}'
 ```
 
# group_project1
First group project - Aaron Hellman, Logan Musselman

IEX Market API URL: https://iextrading.com/developer/docs/#batch-requests

CanvasJS Javascript chart URL Found: https://canvasjs.com/javascript-charts/chart-cursor-crosshair/

CanvasJS Javascript chart docs URL: https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/

Google Trends NPM package docs URL: https://www.npmjs.com/package/google-trends-api

This project uses node modules for webpack to compile: https://www.npmjs.com/package/webpack-node-externals

#### This project will be using google Maps Javascript API

# important information about the IEX Market API

Endpoint information for IEX API -

/ref-data/symbols ---> 

### Symbols Data Parameters
===============================
symbol	refers to the symbol represented in Nasdaq Integrated symbology (INET).

name	refers to the name of the company or security.

date	refers to the date the symbol reference data was generated.

isEnabled	will be true if the symbol is enabled for trading on IEX.

 type	refers to the common issue type (
- AD - ADR
- RE - REIT
- CE - Closed end fund
- SI - Secondary Issue
- LP - Limited Partnerships
- CS - Common Stock
- ET - ETF)
- iexId	unique ID applied by IEX to track securities through symbol changes.

 /stats/historical?date=YYYYMM -->

(Date must be in the 'YYYYMM' format where YYYY = 4 digit year && MM = 2 digit month ex. 201701 == January 2017 )

will return the months stats for the specified company

 /stock/{symbol}/ohlc ---> 

 ### Stock Parameters 
 ================
 price	number	refers to the official open or close price

 high	number	refers to the market-wide highest price from the SIP (15 minute delayed)

 low	number	refers to the market-wide lowest price from the SIP (15 minute delayed)

 time	number	refers to the official listing exchange time for the open or close

 data parameter within this function must be in the following form

     data = [
         { x: some date, y: somevalue },
         { x: some date, y: somevalue }
     ]; 

>>>>>>> e780775f6881214ba1ae7926530321ee516397bd
