require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command1 = "spotify-this-song";
var command2 = "movie-this";
var command3 = "do-what-it-says";

var userInput = process.argv.slice(2);
console.log(userInput);
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });