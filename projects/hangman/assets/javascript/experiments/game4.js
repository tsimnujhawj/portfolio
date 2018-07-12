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
 var playerGuess = [];
 var lives = 10;
 var wrongGuess = [];
 var answerArray = [];
 var wins = 0;
 var losses = 0;
 var rightGuessAlready = [];

    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];

    // Set up the answer array
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    };
    var remainingLetters = word.length;

    // Press Space to start
    document.getElementById("underscore").innerHTML = "PRESS SPACE TO START";

    // START OF GAME    
    document.body.onkeyup = function game() {
        if(event.keyCode == 32) {

    
    // Show the player their underscore
    document.getElementById("underscore").innerHTML = answerArray.join(" ");

    // Listen for player's guess
    document.addEventListener("keyup", function() {
    playerGuess = event.key
    console.log(playerGuess);
    console.log(remainingLetters);
    console.log(answerArray);
    console.log(word);
    console.log(rightGuessAlready);


                // GAME LOOP
                
    for (var i = 0; i < word.length; i++) {

            document.getElementById("lifeBox").innerHTML = lives;
            document.getElementById("winsBox").innerHTML = wins;
            document.getElementById("lossesBox").innerHTML = losses;

                // Check if player's guess is right
            if (word[i].includes(playerGuess)) {
            rightGuessAlready.push(playerGuess);
            answerArray[i] = playerGuess;
            remainingLetters--;
            document.getElementById("underscore").innerHTML = answerArray.join(" ");
            document.getElementById("messageBox").innerHTML = "Your guess is RIGHT!";
            checkWin();
            }

            //     // Alert player if player has already guessed the letter
            // else if (rightGuessAlready.indexOf(playerGuess) === -1) {
            // document.getElementById("messageBox").innerHTML = "You have guessed " + playerGuess.toUpperCase() + "!";
            // }

        } // END OF GAME FOR LOOP

                // Evaluate if letter has already been guessed
        //     function evalGuess(playerGuess) {
        //     var count = [];
        //     var occurances = word.indexOf(playerGuess);
        //     var countGuess = word.split(playerGuess).length - 1;
        //     var countGuess2 = answerArray.split(playerGuess).length - 1;
        //     console.log("In position " + occurances);
        //     console.log("Occured: " + countGuess);
        //     console.log("Occured 2: " + countGuess2);
        //     if (countGuess === answerArray[i]) {
        //     console.log("Occured: " + countGuess)

        //     forEach()
        //     }
        // }

                // Check if player has won
            function checkWin() {
            if (remainingLetters === 0) {
            document.getElementById("messageBox").innerHTML = "You have WON! Press ENTER to play again!";
            wins++;
            console.log("Wins " + wins);
                }
            }

                // Check if player has lost
            function checkLost() {
            if (lives <= 0) {
            document.getElementById("messageBox").innerHTML = "You have LOST! Press ENTER to play again!";
            losses++;
            console.log("Losses " + losses);
                }
            }

                // Player already guessed wrong
            if (wrongGuess.includes(playerGuess) === true || event.keyCode === 32) {
            var wrongGuessAlready = true;
            document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
            }

                // Player guessed wrong
            if (answerArray.indexOf(playerGuess) === -1 && wrongGuessAlready !== true) {
            wrongGuess.push(playerGuess)
            lives--;
            document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
            document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
            checkLost();
            }
            return lives;

        } // END OF EVENTLISTENER FUNCTION
    )} // END OF PRESS SPACE TO START
}; // END OF START GAME FUNCTION