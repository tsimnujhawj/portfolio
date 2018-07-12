// Create an array of Words
// var words = [
//     "Mighty Ducks",
//     "Donald Duck",
//     "AFLAC Duck",
//     "Daffy Duck",
//     "Howard the Duck",
//     "Rubber Duckie",
//     "Plucky Duck",
//     "Daisy Duck",
//     "Darkwing Duck",
//     "Scrooge McDuck",
//     "Ludwig Von Drake",
//     "Della Duck",
//     "Baby Huey",
//     "Melissa Duck",
//     "Huey",
//     "Dewey",
//     "Louie",
//     "Launchpad McQuack",
//     "Webby Vanderquack",
//     "NegaDuck",
//     "Howard the Duck",
//     "Yakky Doodle",
//     "Count Duckula",
//     "Quackerjack",
//     "Abby Mallard"];

//     var underScore = [];
//     var rightWord = [];
//     var wrongWord = [];


// // Choose word randomly
// var randNum = Math.floor(Math.random() * words.length);
// var chosenWord = words[randNum];
// console.log(chosenWord);

// // Set up the answer array
// var answerArray = [];
// for (var i = 0; i < chosenWord.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = chosenWord.length;

// // GAME LOOP //
// while (remainingLetters > 0) {
//     // Print underscore based on amount of letters
// document.getElementById("underscore").innerHTML = answerArray.join(" ");
//     // Listens for keypress
// document.addEventListener("keypress", function() {
//     var keyCode = event.key;
//     if (chosenWord[i] === keyCode) {
//         answerArray[i] = keyCode;
//         remainingLetters--;
    
//     }})};

    // Create an array of words
 var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];

 var lives = 10;
 var wins = 0;
 var losses = 0;
 var wrongGuess = [];
 var answerArray = [];
 var playerGuess = [];
 var wrongGuessAlready;


    // Press space to start display
    document.getElementById("underscore").innerHTML = "PRESS SPACE TO START";

    // Press space to start game
    document.addEventListener("keyup", function () {
    if(event.keyCode == 32) {
        game();
    }})

    // START OF GAME
    function game() {

    wrongGuess = [];
    answerArray = [];
    playerGuess = [];
    wrongGuessAlready;
    lives = 10;
    wins = 0;
    losses =0;

    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];

    // Set up the answer array
    for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
    };
    
    // Show the player underscore
    document.getElementById("underscore").innerHTML = answerArray.join(" ");
    console.log(answerArray.indexOf("_"))
    console.log(word);

    // Display player stats
    document.getElementById("lifeBox").innerHTML = lives;
    document.getElementById("winsBox").innerHTML = wins;
    document.getElementById("lossesBox").innerHTML = losses;

    // Check if player has won
    function checkWin() {
    if (answerArray.indexOf("_") === -1) {
    document.getElementById("messageBox").innerHTML = "You have WON! Press ENTER to play again!";
    wins++;
        }
    } document.addEventListener("keyup", function () {
    if(event.keyCode == 13) {
        game();
    }})

    // Check if player has lost
    function checkLost() {
    if (lives <= 0) {
    document.getElementById("messageBox").innerHTML = "You have LOST! Press ENTER to play again!";
    losses++;
        }
    } document.addEventListener("keyup", function () {
    if(event.keyCode == 13) {
        game();
    }})

    // // Player already guessed wrong
    // function checkWrong() {
    // if (wrongGuess.includes(playerGuess) === true || event.keyCode === 32 || event.keyCode === 13) {
    // var wrongGuessAlready = true;
    // document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
    // }

    // // Player guessed wrong
    // else if (answerArray.indexOf(playerGuess) === -1 && wrongGuessAlready !== true) {
    // wrongGuess.push(playerGuess)
    // lives--;
    // document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
    // document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
    // checkLost();
    // }
    // return lives;
    // }

    // Listen for player's guess
    document.addEventListener("keyup", function() {
    playerGuess = event.key;
    for (var i = 0; i < word.length; i++) {

    // Check if player's guess is right
    if (word[i].includes(playerGuess)) {
    answerArray[i] = playerGuess;
    document.getElementById("underscore").innerHTML = answerArray.join(" ");
    document.getElementById("messageBox").innerHTML = "Your guess is RIGHT!";
    checkWin();
    }
            
            // Player guessed wrong
    else if (answerArray.indexOf(playerGuess) === -1 && wrongGuessAlready !== true) {
    wrongGuess.push(playerGuess)
    lives--;
    document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
    document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
    checkLost();
    }
    return lives;
    }

}) // END OF GAME FOR LOOP
};