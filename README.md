# PROJECT_02-Express-FitCLICK

PROJECT NAME: FITCLICK

DESCRIPTION: 

FitClick is an exercise tracker, a central place for users to record fitness activity and goals. Users can log their daily workouts as well as keep a dairy of their personal goals. The premise of the app is to be a positive reinforcement for individuals who are working towards either a fitness or gnereral goal. Emphasing a place to organize your general wellness. The app gives the user the flexibility to decide the level of their workout and write down a description to revert back to in the future. Each user has a profile unique to their goals and workouts. 

DATABASE STRUCTURE
Database: fitclick_dev
Table: users, workouts, goals 
Users
id, username, password_digest, firstname, lastname
Workouts
id, category, description, level, date_entry, user_id
Goals
id, name, description, user_id


WIREFRAMES: 

![imageDescrip](https://i.imgur.com/kEaWPlg.jpg)
![imageDescrip](https://i.imgur.com/wSdq3si.jpg)

USER STORIES
 
 Index.JS
 -open up FitClick
 -User is presented with two button options Join or Login
 -User presses Join and prompted with four input boxes where they enter first name, last name, username and password then clicks join
 -Once clicked join the user has created a user profile that they can log in and out with
 -User clicks join and is brought to their Profile page
 -If user has previous account, they log in and are brought to their existing profile page

Profile Page // users-home.ejs
- Once logged in, the nav bar updated to show Home, Workouts, Goals and now Profile and Logout 
- User is presented with logo and sees their workouts on the left and goals on the right hand side of the page
- User presses Log a workout + to add a workout
- User presses Add a Goal + to add a goal

ACTION ITEM 1

((User PRESSES Log a Workout))
Log a Workout // workouts-new.ejs
-user presses log a workout from users-home.ejs and is brought to workouts-new.ejs
-Workouts new view  has 4 input boxes for the user to input:
    - target area / workout type
    - description
    - difficulty level 
    - date completed
-user presses add workout and the workout is added to their log as well as workouts table with their corresponding user_id

Workout Show // workouts-show.ejs
- User presses add workout and is brought to the workout show view where they see an overview of their workout
- user has the option to edit the workout, delete the workout or go back to their full workout index
    -->Workout Edit//workouts-edit.ejs
    -User presses edit on show page and are prompted with the previous text inputted into the fields
    -the user inputs the date again if needs to be edited
    -user clicks save and is brought back to the Workout Show page of the single workout

    -->Workout Delete//prompts updated list of workouts-index.ejs
    -user clicks delete on the workout show page and the workout deletes from the workouts database table associated with their userid
    -user is brought to the workout index page without the workout they chose to delete 

    -->Workout Index//workouts-index.ejs
    -user clicks back to workouts from show page that brings the user to the workouts index page where they are presented with all the workouts they have logged in a shortened form of just the Date Logged and Target Area
    - the user can select detail which correspondings to each specific workout, log a workout or back to profile
        - if the user selects detail they are brought to that specific workout show page with the full description and edit, delete, back to workouts options
        - if user selects log a workout they are brough to the workouts-new.ejs
        - if user selects back to profile they are brought to users-home.ejs

ACTION ITEM 2
((user PRESSES Add a Goal))
Add a goal // goals-new.ejs
-user presses add a goal from users-home.ejs and is brought to goals-new.ejs
-user has 2 input boxes to input:
    - Goal
    - Description
-user enters in the name of their goal and a corresponding description 
-user presses add goal to save their goal, adding it to their goals table with corresponding user_id
--user can also decide not to add a goal and return back to the goals index page

Goal Show//Goals-show.ejs
- user presses save to add the goal and is brought to goals-show.ejs
- This shows the goal just added in a single view with its name and description, below the user is given the options edit or delete and a button "back to goals"

-->Goal Edit//Goals-edit.ejs
- user presses edit from goals show page and is brought to goals-edit.ejs
- the previous entered information is in the inputted fields, the user can choose to edit the content and then press save to updated the stored information in the datatable or go "back to goals" 
- user edits content and presses save and is brought back to an updated show view of that specific goal with its updated content 

-->Goal Delete//Brought to Goals-index.ejs
- user presses delete from user show page which deletes the goal from the datatable with their corresponding user_id and renders an updated version of the goals-index page without the deleted goal

-->Goal Index//Goal-index.ejs
- user presses "Back to Goals" and its brought to goals-index.ejs where they are presented with all the goals they have added into their account
- each goal shows its corresponding name and description
- each goal has two corresponding options edit or delete
-edit takes you to the goals-edit.ejs page
-delete stays on the index page and updates the index to be without the goal 
-outside of the goals list window the user has two options either to Add a Goal + or return Back to their Profile
- If user presses Add a Goal they are brought to goals-new.ejs
- If User presses Back to Profile they are brought to users.home.ejs



The technologies, APIs, and modules you used and a description of each
A code snippet of a part of the app you're particularly proud of
Any things you plan to fix or features you plan to add
Instructions for downloading the code and running it on localhost

The technologies, APIs, and modules you used and a description of each

HTML / EJS --> used html for the layout of my views, organizing my information on the server, ejs allowed me to pull in javascript into my html view and pull specific data out of my json objects

Node and Express --> node allows me to run my application outside of the browser on my computer/local server. Express gave my node its framework to set up the server, specifically giving me the ability to use middleware in my app and assign my const routes /workout, /auth, /goal, /user

MVC Pattern --> My app is designed using the MVC pattern we used in class, each table within my database has a corresponding Model View and Controller. My models allowed me to talk to my database fitclick_dev and its respective tables: workouts, goals and users. Furhter allowing me to pull all goals/workouts, pull one single goal/workout, create a single goal/workout, destroy a goal/workout from their respective tables. My user model made it possible to integrate auth and pull information from the workouts and goals tables in coordination with the same user_id. When called by their corresponding routers, my controllers took queries set by my models and rendered the views I set up in relation to each route. 

SQL/ PG-PROMISE --> pg-promise and sql allowed me to interact with my database directly. pg-promise set up the connection to my database and create a variable db in my config.js that i was then able to call within my models to set up sql queries to talk to my databse

CSS & DESIGN --> Used CSS to apply styles to my app. Integrated flexbox for positioning around the page and google fonts for consistent headings as well as color pallettes for a coordinating design throughout. I used CSS / design to tie all the elements of my app together. As i created my fitclick app you handle things in seperate parts, but css gives you the chance to blend them together and show that w consistent styling that they are all part of the full emodiment and functionality of the app. My design was purposefully meant to be interactive but also straightforward, express functionality through where objects are placed on the page and adding consistent css features to button to express interactivity 

CRUD--> full ability to create, read, update and delete on the app

CODE SNIPPET --> 

User.findUserWorkouts = id => {
  return db.manyOrNone(`
    SELECT * FROM workouts
    WHERE user_id = $1
    `, [id]);
    }

User.findUserGoals = id => {
  return db.manyOrNone(`
    SELECT * FROM goals
    WHERE user_id = $1
    `, [id]);
    }

Proud of the above, was an ongoing error // block I was facing when trying to pull goals and workouts in relation to one specific user by their common user_id. At first I was writing with one query joining workouts and goals on their common user_id but it outputted double the information needed. Instead of letting myself stare endlessly at it or foregoing having a users home page, i went to the src and asked for help. Through conversations and reiterating what i wanted to do, a way to achieve what i wanted for my user experience and general functionality became possible. The above model methods are called in user index controller as functions and rendered to the users-home view in relation to the specific user loggedin. 

Any things you plan to fix or features you plan to add

I plan to fix and spend more time on the CSS. One of the things that this project made me realize is that CSS is equally as important as the baseline functionality of your app when it comes to the final product. When we're building there's such a natural inclination to focus way more on the functionality of everything and making sure it works. Which is a good way to start, but when I was doing the CSS I started to realize that the way I set up my views needed to be purposeful if I wanted to have a CSS format that could consistently output on everypage. 

I would love to add a randomizing feature where users could flip through their inputted workouts and output a potential workout to do for the day.  

Instructions for downloading the code and running it on localhost:

make sure dev and debugger are added to scripts
download the dependencies
npm install 
"dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "dotenv": "^4.0.0",
    "ejs": "^2.5.7",
    "express": "^4.16.2",
    "express-session": "^1.15.6",
    "method-override": "^2.3.10",
    "morgan": "^1.9.0",
    "nodemon": "^1.12.1",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "pg-promise": "^7.1.0"
then npm run dev

