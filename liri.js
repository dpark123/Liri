require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var command1 = "spotify-this-song";
var command2 = "movie-this";
var command3 = "do-what-it-says";

var liriCat = process.argv[2];
var userSearch = process.argv.slice(3);
console.log(userSearch);

// spotify
//   .search({ type: 'track', query: userInput })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });



if (liriCat === command1) {
    spotify.search({ type: 'track', query: userSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song title: " + data.tracks.items[0].name);
        console.log("Check this song out: " + data.tracks.items[0].preview_url);
        console.log("Album title: " + data.tracks.items[0].album.name);
    })
}

if (liriCat === command2) {
    axios({
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey=674d89b5&t=' + userSearch
    })
        .then(function (response) {
            //   console.log(response);
            console.log("Movie title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);//rotten tomatoes rating
            console.log("Country: " + response.data.Country);
            console.log("Languages: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        });
}

if (liriCat === command3) {
    var readFile = require('utils-fs-read-file');

    readFile("random.txt", onFile);

    function onFile(error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    }
}
