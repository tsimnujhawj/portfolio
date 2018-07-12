
    // Create an array of words
 var words = [
    "mighty",
    "donald",
    "aflac",
    "daffy",
    "howard",
    "rubberduckie",
    "plucky",
    "daisy",
    "darkwing",
    "scroogemcduck",
    "della",
    "huey",
    "dewey",
    "louie",
    "negaduck",
    "yakkydoodle",
    "countduckula",
    "quackerjack",
];

// Global variables inital set
 var myImage = "";
 var imageDuck = "";
 var playerGuess = [];
 var lives = 10;
 var wrongGuess = [];
 var answerArray = [];
 var wins = 0;
 var losses = 0;
 var lettersGuessed = {
     cache: []
 };
 var setState = "dead";
 var word = "";

// Begin the game
window.onload = document.getElementById("underscore").innerHTML = "Category: Famous ducks";

//Begin function
function begin() {
setState = "play";
document.getElementById("messageBox").innerHTML = "Press a KEY to guess!";
gameStart()
}

// Start game and set variables/objects/arrays
function gameStart() {
if (setState === "play") {

answerArray = [];
lives = 10;
wrongGuess = [];
lettersGuessed = {
cache: [],
};

        // Pick a random word
        word = words[Math.floor(Math.random() * words.length)];


        // Set up the answer array
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        };

}

    // DEAD STATE after win
    else {
        document.getElementById("messageBox").innerHTML = "You WON! Click PLAY!";
    }

// Display of Player's stats
document.getElementById("underscore").innerHTML = answerArray.join(" ");
document.getElementById("lifeBox").innerHTML = lives;
document.getElementById("winsBox").innerHTML = wins;
document.getElementById("lossesBox").innerHTML = losses;

};


// Check if player has won
function checkWin() {
    if (answerArray.indexOf("_") === -1) {
    setState = "dead"
    wins++;
    document.getElementById("winsBox").innerHTML = wins;
    gameStart()
    }
}

// Check if player has lost
function checkLost() {
    if (lives <= 0) {
    document.getElementById("messageBox").innerHTML = "You have LOST! Press PLAY!";
    losses++;
    setState = "dead";
        }
    }

    // Listen for player's guess
    document.addEventListener("keyup", function() {
        playerGuess = event.key.toLowerCase();
        // Will only accept keys if in PLAY state
        if (setState === "play") {

        // Check if guess is wrong
        if (word.includes(playerGuess) === false) {
            wrongGuess.push(playerGuess);
            document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
            document.getElementById("messageBox").innerHTML = "Your guess is WRONG!";
            lives--;
            document.getElementById("lifeBox").innerHTML = lives;
            checkLost();
        }

        // Check if player's guess is right with FOR LOOP to cycle word letters
    for (var i = 0; i < word.length; i++) {

            if (word[i].includes(playerGuess)) {
            lettersGuessed.cache.push(playerGuess);
            answerArray[i] = playerGuess;
            document.getElementById("underscore").innerHTML = answerArray.join(" ");
            document.getElementById("messageBox").innerHTML = "You have guessed RIGHT!";
            checkWin();
            };

        }
    
}
});
