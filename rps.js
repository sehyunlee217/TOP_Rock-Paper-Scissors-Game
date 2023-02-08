// // create function called getComputerChoice that randomly return Rock, Paper, or Scissors
// // the function will return a variable, compChoice, that stores result as a string
// function getComputerChoice() {
//     // use a function to randomly generate 3 random numbers(1,2,3); max = 3, min = 1 
//     // and store the random number as a variable
//     let randNum = Math.floor(Math.random() * 3) + 1;
//     // if the number generated is 0, the compChoice = Rock
//     if (randNum == 1) {
//         compChoice = "ROCK";
//     }
//     // if the number generated is 1, the compChoice = Paper
//     else if (randNum == 2) {
//         compChoice = "PAPER";
//     }
//     // if the number generated is 2, the compChoice = Scissors
//     else {
//         compChoice = "SCISSORS";
//     }
//     // return the computer's choice
//     return compChoice;
// }

// function playRound(playerSelection, computerSelection) {
//     // compare player choice to computer's choice
//     // when playerSelection == computerSelection, it's a tie
//     if (playerSelection == computerSelection) {
//         return ("It's a tie!");
//     }
//     // if playerSelection is ROCK, 2 cases
//     else if (playerSelection == "ROCK") {
//         // comp is SCISSOR, player wins
//         if (computerSelection == "SCISSORS") {
//             return ("Player wins!");
//         }
//         // comp is PAPER, comp wins
//         else {
//             return ("Computer wins!");
//         }
//     }
//     // if playerSelection is PAPER, 2 cases
//     else if (playerSelection == "PAPER") {
//         // comp is SCISSOR, comp wins
//         if (computerSelection == "SCISSORS") {
//             return ("Computer wins!");
//         }
//         // comp is ROCK, player wins
//         else {
//             return ("Player wins!");
//         }
//     }
//     // if playerSelection is SCISSORS, 2 cases
//     else if (playerSelection == "SCISSORS") {
//         // comp is ROCK, com wins
//         if (computerSelection == "ROCK") {
//             return ("Computer wins!");
//         }
//         // comp is PAPER, player wins
//         else {
//             return ("Player wins!");
//         }
//     }

// }

// function game() {
//     // play a 5 round game, where index will go up by 1 each round until it reaches 4, starting from 0.
//     // keep a score  of how many times player won or computer won with a variable for each score
//     // both starts at 0
//     let playerScore = 0;
//     let compScore = 0;
//     for (let i = 0; i < 5; i++) {

//         // have a while loop that would only go to the next step if userInput is checked valid
//         // condition to break is that invalidInput boolean is false
//         // game won't start unless the userInput is valid, the valid is not checked yet, so it starts at true.
//         let invalidInput = true;

//         // while (invalidInput) {
//         //     // get user input as a string variable
//         //     userInput = prompt("Choose from rock, paper, scissors");
//         //     // make userInput case sensitive by doing all caps
//         //     userInput = userInput.toUpperCase()
//         //     // validate the user input to make sure it is one of the three choices
//         //     const choices = ["ROCK", "PAPER", "SCISSORS"];
//         //     // loop starts at 0, ends at 2, goes up by 1 ; iterates 3 times
//         //     for (let j = 0; j < 3; j++) {
//         //         // check if userInput matches items in choices, by iterating through 0, 1, 2
//         //         if (userInput == choices[j]) {
//         //             // if match is found, we know the userInput is valid
//         //             invalidInput = false
//         //         }
//         //     }
//         // }
//         // userInput is checked to be valid so play round
//         // get computer choice as a parameter to playRound() function
//         let compChoice = getComputerChoice();
//         let result = playRound(userInput, compChoice);
//         // update current score of player and computer
//         if (result == "Player wins!") {
//             playerScore++;
//         }
//         else if (result == "Computer wins!") {
//             compScore++;
//         }
//         alert("You played: " + userInput + " | Computer played: " + compChoice);
//         alert(result + " | Player : " + playerScore + " Computer : " + compScore);
//     }
// }

// game();