# PROJECT_02-Express-FitCLICK
Potential APIs

API: https://developer.underarmour.com/
https://dev.fitbit.com/reference/web-api/quickstart/#introduction
https://developer.nike.com/documentation/api-docs.html


FITCLICK- WHAT IS THE APP?

FitCLICK is an exercise tracker, keeping track of your fitness activity and goals. Users can pick and track their chosen workouts as well as keep a logger of personal goals. Want it to be a positive reinforcement for users, not just about fitness but general wellness. The user will have the ability to view different workout regimes and input any goals they would like to keep track of. A potential feature I am curious about incorporating is adding a google calendar api to add it as an event to your calendar. 

USER STORIES
 
- Open up fitclick
- Choose the option to login or signup
- If user chooses signup, will be prompted to another page where you input: first name, last name, username and password
- if user chooses login will be brought to a separate window with a field to fill in your username and password
- Login / Join, brought to “home” / “landing” page which is an overview of their profile
- On the left hand side there is a column with Personal Goals with a preview of their last 3 inputted personal goals, the goals can be related to working out or general motivational points
- On the right hand side is their logged / work out “picks” 
- User clicks “choose workout” button on the bottom to start building their page 
- Workout view contains a search bar with the work categories: “upper body”, “lower body”, “long distance run”, “short distance run” “abs” “leg workout”, “arm workout”
- User selects a category and a randomizer picks a workout, they can either click next and shuffle through another option or “Add It” to their workouts on their profile
- If user clicks add it they are brought to their “Workout” Page where it lists all their added workouts
- user clicks next they will be shuffling through until they decide to add
-On workout page there is an option to click all their workouts for a single workout view, edit or delete it. They can also return back to their profile landing page via nav bar
- if user clicks “add goal” within personal goals on landing page, they are prompted to a goals page with an input section where they can type a personal goal and it will log 

DATABASE STRUCTURE
Database: fitclick_dev
Table: users, workouts, goals 
Table Users
Id, firstname, lastname, username, password
Table workouts
Id, category, instructions, duration
Table goals
Id, goals
