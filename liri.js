require("dotenv").config();

var fs = require("fs");

var inputString = process.argv;

var activity = inputString[2];

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var input = process.argv[3];
var command = process.argv[2];

console.log(command, input);

function movie(title) {
    var queryUrl = "http://www.omdbapi.com/?apikey=2636e1ce&t=" + title;
    console.log(queryUrl);
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
            console.log(response.data.Actors);
        })
        .catch(function (error) {
            console.log(error.message);
            if (error.response) {
                
            }
        });
}
function concert(artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(response.data[0].datetime);
        })
        .catch(function (error) {
            if (error.response) {

            }
        });
}


function spotifyThisSong(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0]);
    });
}
switch (command) {
    case "concert-this":
        concert(input);
        break;

    case "spotify-this-song":
        spotifyThisSong(input);
        break;

    case "movie-this":
        console.log("MOVIE THIS!");
        movie(input);
        break;

    case "":
        movie(input);
        break;
}