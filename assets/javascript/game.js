// app randomly picks a letter, and the user has to guess which letter the app chose 
//  
// 1. Put the following text on your page:
// 2. Guess what letter I'm thinking of
// 3. Wins: (# of times the user has guessed the letter correctly)
// 4. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// 5. Guesses Left: (# of guesses left. This will update)
// 6. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// 7. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// 8. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). 


//array of letter to choose from 
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//store the letter choosed by the computer // eventually letter[i]
let computerChoice = "";
let randomIndexNumber = Math.floor(Math.random() * (26));

//assign the random number to the array to pass a random letter to computer choice
computerChoice = letters[randomIndexNumber];


let usersGuess = [];
let guessesLeft = 9;
let numberOfWins = 0;
let numberOfLosses = 0;

document.onkeyup = function(event) {
    //text displaying game info
    let winDisplay = document.getElementById("wins");
    let lossDisplay = document.getElementById("loss");
    let guessDisplay = document.getElementById("current-guesses");
    let guessNumber = document.getElementById("guesses-left");
    //function that resets the game
    function resetGame(){
        computerChoice = letters[Math.floor(Math.random() * (26))];
        guessesLeft = 9;
        usersGuess = [];
        guessDisplay.textContent = "Your guesses so far: ";
        guessNumber.textContent = "Guesses Left: " + guessesLeft;
    };
    //check if user typed a letter 
    //function provided by https://stackoverflow.com/questions/16647404/javascript-function-to-enter-only-alphabets-on-keypress
    function lettersOnly() {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
                return true;
            }
             else{
                return false;
             }
        };
//only run the game if a letter was guessed
if(lettersOnly()){
    if(guessesLeft > 0){
    //store users guess into an array
    usersGuess.push(event.key);
    //update display with letter guesses 
    guessDisplay.textContent = "Your guesses so far: " + usersGuess;
    //tick down guesses left
    guessesLeft--;
    //update display with number of guesses left 
    guessNumber.textContent = "Guesses Left: " + guessesLeft;
    //if user hits the right key, update the win count and reset guesses
    if(event.key === computerChoice)
    {
        numberOfWins++;
        winDisplay.textContent = "Wins: " + numberOfWins;
        resetGame();
    }

    console.log(computerChoice);
    console.log(guessesLeft);
    }
    else {
        numberOfLosses++;
        lossDisplay.textContent = "Losses: " + numberOfLosses;
        resetGame();
    }

}
};







