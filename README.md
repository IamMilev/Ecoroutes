# Razhodi.se
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/iammilev/ecoroutes"><a href="https://github.com/IamMilev/Ecoroutes/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/IamMilev/Ecoroutes"></a> <a href="https://github.com/IamMilev/Ecoroutes/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/IamMilev/Ecoroutes"></a> <a href="https://github.com/IamMilev/Ecoroutes/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/IamMilev/Ecoroutes"></a>


## Description
The purpose of this web app is to make it easy for people who search places for a walk or a hike. 
It contains information about trails, places to rest and beautiful views. Everyone can upload a place that he
had been and share his experience with the other users. Build with React JS. Images coming soon*

## Functionality
This app has two parts, one for authenticated users and one for guest users. App has registration and login forms.
The guest users can see the homepage, the list of ecotrails and the login/register pages. Other routes are protected
and can't be reached by any mean. The logged in users can visit all pages plus the profile and Add Ecotrail page.
Only authenticated users can add Ecotrail. The trails have title, description, image, date of the visit, duration
of the walk/hike. In near feature, I will add level of difficulty, a map with pinned location, rating system and 
comments of other users. Images coming soon*

## Tech Used
My frontend is built with React JS. I use Axios library for fetching data from my REST API. I used react-datepicker
library for picking the date you visited the ecotrail, when adding one. No other libraries where used for the frontend part.
The backend is build with express, mongoose. I used MongoDB for database. For authenticating the users I used jwt and bcryprt.
MongoDB database starts if your IP is whitelisted, when the app is production ready I will make it available for everyone.

## Problems that I faced
The most time consuming problem was the validation of the "Add Ecotrail" form. I used functional component with useState Hook
for the fields and for some reason was hard for me to validate all the fields, but the problem was solved with one separate
hook which contains object with the error messages.

## Technical Description
When the repository is fetched, you can navigate to /backend folder, using the terminal and run "nodemon start" to start the server.
### Example:
"C:\Users\Username\Project>cd backend" <br>
"C:\Users\Username\Project\backend>nodemon start" <br>

After that you can open new terminal, navigate to /frontend folder and run "npm start" to start the frontend part.
### Example:
`"C:\Users\Username\Project>cd frontend"
 "C:\Users\Username\Project\frontend>npm start"`
