/**  Movie Picker By Jemma **/

/** Variable, Constants, Arrays **/
var userName;
var userAge;
var userScare;
var userMovie;

const MINAGE = 5;
const MAXAGE = 100;
const MINSCARE = 1;
const MAXSCARE = 10;

const movieArray = ["Monster Inc","Goosebumps","Monster House", "Ghostbusters", "Jaws", "The Witches"]

/** Main Code **/
function start(){
  askUserName();
  askUserAge();
  displayMovies();
}


/** Functions **/
function askUserName(){
  userName = prompt ("Welcome to the movie selector program, what is your name?")
}

function askUserAge(){
  userAge = prompt ("How old are you?")
  alert ("Hello, " + userName + " you are " + userAge)
}

function displayMovies(){
  alert ("These are the list of movie names " + movieArray)
}
