function playRound(playerSelection) {
    // -------------------------------------------------------------------------
    // use a function to randomly generate 3 random numbers(1,2,3); max = 3, min = 1 
    // and store the random number as a variable
    let randNum = Math.floor(Math.random() * 3) + 1;
    // if the number generated is 0, the compChoice = Rock
    if (randNum == 1) {
        compChoice = "ROCK";
    }
    // if the number generated is 1, the compChoice = Paper
    else if (randNum == 2) {
        compChoice = "PAPER";
    }
    // if the number generated is 2, the compChoice = Scissor
    else {
        compChoice = "SCISSOR";
    }
    // compare player choice to computer's choice
    // when playerSelection == compChoice, it's a tie
    // -------------------------------------------------------------------------
    // add result to class="result" div

    const result = document.querySelector(".result");
    let returnText;

    if (playerSelection == compChoice) {
        returnText = ("It's a tie!");
    }
    // if playerSelection is ROCK, 2 cases
    else if (playerSelection == "ROCK") {
        // comp is SCISSOR, player wins
        if (compChoice == "SCISSOR") {
            returnText = ("Player wins!");
        }
        // comp is PAPER, comp wins
        else {
            returnText = ("Computer wins!");
        }
    }
    // if playerSelection is PAPER, 2 cases
    else if (playerSelection == "PAPER") {
        // comp is SCISSOR, comp wins
        if (compChoice == "SCISSOR") {
            returnText = ("Computer wins!");
        }
        // comp is ROCK, player wins
        else {
            returnText = ("Player wins!");
        }
    }
    // if playerSelection is SCISSOR, 2 cases
    else if (playerSelection == "SCISSOR") {
        // comp is ROCK, com wins
        if (compChoice == "ROCK") {
            returnText = ("Computer wins!");
        }
        // comp is PAPER, player wins
        else {
            returnText = ("Player wins!");
        }
    }

    result.textContent = returnText;
    // console.log(returnText);
    return returnText;
}

function game(e) {
    // game goes until one reaches 5 points
    const playerScoreHTML = document.querySelector(".player_score");
    const compScoreHTML = document.querySelector(".comp_score");


    let roundResult = playRound(e.className);

    if (roundResult == "Player wins!") {
        playerScore++;
    }
    else if (roundResult == "Computer wins!") {
        compScore++;
    }

    playerScoreHTML.textContent = playerScore;
    compScoreHTML.textContent = compScore;

    e.classList.add("selected");

    console.log(playerScore, compScore);

    if (playerScore == 5 || compScore == 5) {
        const result = document.querySelector(".result");
        const buttons = document.querySelectorAll("button");

        if (playerScore == 5) {
            result.textContent = "Game Over! Player wins!";

        }
        else if (compScore == 5) {
            result.textContent = "Game Over! Computer wins!";
        }

        buttons.forEach((btn) => { btn.disabled = true; });

    }


};

function removeTransition(e) {
    if (e.propertyName != "box-shadow") return;
    this.classList.remove("selected");
}

const items = document.querySelectorAll("button");
items.forEach(item => item.addEventListener("transitionend", removeTransition));

const btns = document.querySelectorAll("button");
let playerScore = 0;
let compScore = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        game(btn);
    });
});



