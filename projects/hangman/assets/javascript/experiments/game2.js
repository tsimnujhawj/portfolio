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
 var letters = [];
 var num = 0;
 var word = "";

    // Press space to start display
    document.getElementById("underscore").innerHTML = "PRESS SPACE TO START";

    // Press space to start game
    document.addEventListener("keyup", function () {
    if(event.keyCode == 32) {
        game();
    }})

    // START OF GAME
    function game() {

    // Pick a random word
    word = words[Math.floor(Math.random() * words.length)];
    playerGuess = [];
    wrongGuess = [];
    answerArray = [];
    lives = 10;
    letters = word.split("");
    num = letters.length;
    console.log(word);

    // Set up the answer array
    for (var i = 0; i < num; i++) {
    answerArray.push("_");
    };
    
    // Show the player underscore
    document.getElementById("underscore").innerHTML = answerArray.join(" ");
    // Display player stats
    document.getElementById("lifeBox").innerHTML = lives;
    document.getElementById("winsBox").innerHTML = wins;
    document.getElementById("lossesBox").innerHTML = losses;

    };

    // Check if player has won
    // function checkWin() {
    // if (answerArray.indexOf("_") === -1) {
    // document.getElementById("messageBox").innerHTML = "You have WON! Press ENTER to play again!";
    // wins++;
    //     }
    // } document.addEventListener("keyup", function () {
    // if(event.keyCode == 13) {
    //     game();
    // }})

    // Check if player has lost
    // function checkLost() {
    // if (lives <= 0) {
    // document.getElementById("messageBox").innerHTML = "You have LOST! Press ENTER to play again!";
    // losses++;
    //     }
    // } document.addEventListener("keyup", function () {
    // if(event.keyCode == 13) {
    //     game();
    // }})
    

    // Player already guessed wrong
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

    function update() {
    // Show the player underscore
    document.getElementById("underscore").innerHTML = answerArray.join(" ");
    // Display player stats
    document.getElementById("lifeBox").innerHTML = lives;
    document.getElementById("winsBox").innerHTML = wins;
    document.getElementById("lossesBox").innerHTML = losses;

    if (letters.toString() === answerArray.toString()) {
        wins++;
    } else if (lives === 0) {
        losses++
        game();
    }
}



    // Listen for player's keyup
    document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(playerGuess);
    console.log(playerGuess);
    update();
    };

    // CHECK GUESS
    function checkGuess(letter) {
    var letterExist = false;
    for (var i = 0; i < num; i++) {
    // Check if player's guess is right
    if (letter == word[i]) {
    letterExist = true;
        }
    }

    if (letterExist) {
    for (var i = 0; i < num; i++) {
    answerArray[i] = letter;
    document.getElementById("messageBox").innerHTML = "Your guess is RIGHT!";
        // Show the player underscore
        document.getElementById("underscore").innerHTML = answerArray.join(" ");
        }
    }

    // Player guessed wrong
    else {
    wrongGuess.push(letter);
    lives--;
    document.getElementById("messageBox").innerHTML = "Your guess of " + letter.toUpperCase() + " is WRONG!";
        }
    }; // END OF CHECK GUESS