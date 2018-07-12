// var questions = {
//     question1: "What is the",
//     question2: "What is the",
// };

// function trivia() {

// }

// var chances = 10;

// if (chances <= 0) {
//     document.write("Sorry, you ran out of lives! YOU LOSE.")
// }

// function game() {

// }

// Create an array of Words
var words = [
    "Mighty Ducks",
    "Donald Duck",
    "AFLAC Duck",
    "Daffy Duck",
    "Howard the Duck",
    "Rubber Duckie",
    "Plucky Duck",
    "Daisy Duck",
    "Darkwing Duck",
    "Scrooge McDuck",
    "Ludwig Von Drake",
    "Della Duck",
    "Baby Huey",
    "Melissa Duck",
    "Huey",
    "Dewey",
    "Louie",
    "Launchpad McQuack",
    "Webby Vanderquack",
    "NegaDuck",
    "Howard the Duck",
    "Yakky Doodle",
    "Count Duckula",
    "Quackerjack",
    "Abby Mallard"];

    var underScore = [];
    var rightWord = [];
    var wrongWord = [];


// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
console.log(chosenWord);

// GAME LOOP //

// Create underscores based on word
// var genUnderscore = function() {
//     for (var i = 0; i < chosenWord.length; i++) {
//         underScore.push("_ ");
//     }
//     return underScore;
// };

var answerArray = [];
for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = chosenWord.length;

// Print underscore based on amount of letters
// var remainingLetters = chosenWord.length;
while (remainingLetters > 0) {
document.getElementById("underscore").innerHTML = answerArray.join(" ");
document.addEventListener("keypress", function() {
    var keyCode = event.key;
}

// Get user's guess
// document.addEventListener("keypress", function() {
// var keyCode = event.key;
// console.log(keyCode);

// });

for (var i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === keyCode) {
        answerArray[i] = keyCode;
        remainingLetters--;
    }
}

// while (remainingLetters > 0) {
//     document.getElementById("underscore").innerHTML = answerArray.join(" ");
// }

// // if user guess is right
    // if (chosenWord.indexOf(keyCode) > -1) {

    // //     // // add to right words array
    //     rightWord.push(keyCode);
    // //     // replace underscore with right letter
    //     // if (keyCode === chosenWord.charAt(keyCode)) {

    //     document.getElementById("underscore").innerHTML = rightWord.join(" ");

    // } else {
    //     wrongWord.push(keyCode);
    //     document.getElementById("wrongGuessResult").innerHTML = wrongWord.join(" ")
    // };


//     underScore[chosenWord.indexOf(keyword)] = keyword;

// // checks to see if user word matches
//     if (underScore.join("") == chosenWord) {
//         alert("You win!");
//     }
// }
// // add to wrong words array
//     console.log(keyword);
//     wrongWord.push(keyword);
});

// Check if guess is right

// if right push to right array
// f wrong push to wrong array

//////////////////////////////////////////////////////////////////////////////////

// // Image variables
// var image = {
//     mighty: "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/01/tmducks_prm_mdc-bs-1-5_l_copy_-_h_2018.jpg",
//     donald: "https://vignette.wikia.nocookie.net/havealaugh/images/6/6f/Donald_Duck.png/revision/latest?cb=20100618194655",
//     aflac: "https://zdnet2.cbsistatic.com/hub/i/r/2014/10/03/8b3ef107-4b33-11e4-b6a0-d4ae52e95e57/resize/170xauto/569699eb529ba7615de4a749c58d5c6c/duck.jpg",
//     daffy: "https://images-na.ssl-images-amazon.com/images/I/61CheypUNaL._SY355_.jpg",
//     howard: "https://uproxx.files.wordpress.com/2016/07/howard-the-duck5.jpg",
//     rubberduckie: "https://static.makeuseof.com/wp-content/uploads/2017/12/weird-programming-principles-670x335.jpg",
//     plucky: "https://vignette.wikia.nocookie.net/the-saft-squad/images/7/7f/Baby_Plucky.jpg",
//     daisy: "https://alchetron.com/cdn/daisy-duck-c6efe2a6-fe38-4deb-9073-6c891045371-resize-750.gif",
//     darkwing: "https://vignette.wikia.nocookie.net/disney/images/f/fc/Darkwing_Duck_keyart.png",
//     scroogemcduck: "https://vignette.wikia.nocookie.net/scrooge-mcduck/images/f/f2/Scrooge_McDuck_By_Don_Rosa.png/",
//     della: "https://pre00.deviantart.net/70a7/th/pre/i/2018/126/d/3/della_duck_by_hyzenthlay89-dcasyg4.jpg",
//     huey: "https://s3.amazonaws.com/gs-geo-images/29d80404-5063-4ddd-9887-bb6f6a565588_l.jpg",
//     dewey: "https://i.pinimg.com/originals/f3/3f/01/f33f01510e3f6d9ca6816349be0fee45.jpg",
//     louie: "https://vignette.wikia.nocookie.net/scroogemcduck/images/7/7b/Louie_Ducktales.png/",
//     negaduck: "https://vignette.wikia.nocookie.net/characters/images/2/22/Negaduck.gif/",
//     yakkydoodle: "https://vignette.wikia.nocookie.net/characters/images/e/ec/Yakky_Doodle.jpg",
//     countduckula: "https://vignette.wikia.nocookie.net/countduckula/images/b/bc/Count_Duckula.png/",
//     quackerjack: "https://vignette.wikia.nocookie.net/darkwingduck/images/0/01/Quackerjack.jpg",
// };

// // Surely there is a better way of doing this
// // I tried to use the object "image.word", assuming that the value of word === the key of the object
// // giving me the option to use only one line of code, but it wasn't functioning
// if (word == mighty) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.mighty + "/>"; }
// if (word == donald) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.donald + "/>"; }
// if (word == aflac) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.aflac + "/>"; }
// if (word == daffy) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.daffy + "/>"; }
// if (word == howard) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.howard + "/>"; }
// if (word == rubberduckie) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.rubberduckie + "/>"; }
// if (word == pluck) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.plucky + "/>"; }
// if (word == daisy) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.daisy + "/>"; }
// if (word == darkwing) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.darkwing + "/>"; }
// if (word == scroogemcduck) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.scroogemcduck + "/>"; }
// if (word == della) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.della + "/>"; }
// if (word == huey) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.huey + "/>"; }
// if (word == dewey) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.dewey + "/>"; }
// if (word == louie) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.louie + "/>"; }
// if (word == negaduck) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.negaduck + "/>"; }
// if (word == yakkydoodle) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.yakkydoodle + "/>"; }
// if (word == countduckula) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.countduckula + "/>"; }
// if (word == quackerjack) { var myDiv = document.getElementById("imageBox"); myDiv.innerHTML = "<img src=" + image.quackerjack + "/>"; }

//////////////////////////////////////////////////////////////////////////////////////////