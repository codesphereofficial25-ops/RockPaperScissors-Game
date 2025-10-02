let computerScore = 0;
let userScore = 0;

// DOM Elements
const computerScoreSpan = document.querySelector(".computer-score");
const userScoreSpan = document.querySelector(".user-score");

const computerChoiceBtn = document.querySelector(".computer-choice-btn");

const userChoiceBtn = document.querySelectorAll(".user-choice-btn");

const result = document.querySelector(".result");

// Computer's choice function
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.random() // returns random number b/w 0 to 1
    randomNumber = randomNumber * 3; // returns random number b/w 0.something to 2.something

    randomNumber = Math.floor(randomNumber);

    let choice = choices[randomNumber];

    return choice;
}

// Win, Loose and Draw function
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    let resultMessage = `You win, ${userChoice} beats ${computerChoice}!`;
    result.innerHTML = resultMessage;
}

function loose(userChoice, computerChoice){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    let resultMessage = `You loose, ${computerChoice} beats ${userChoice}`;
    result.innerHTML = resultMessage;
}

function draw(userChoice){
    resultMessage = `It's a draw, You both choose ${userChoice}`;
    result.innerHTML = resultMessage;
}

// Game Logic Functin
function game(userChoice) {
    let computerChoice = getComputerChoice();

    if(computerChoice === "rock"){
        computerChoiceBtn.innerHTML = "✊🏼";
    }
    else if(computerChoice === "paper"){
        computerChoiceBtn.innerHTML = "✋🏼";
    } else {
        computerChoiceBtn.innerHTML = "✌🏼";
    }

    switch (userChoice + computerChoice){
        // Winning condition
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        
        // Loosing condition
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            loose(userChoice, computerChoice);
            break;

        // Draw condition
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice);
            break;
    }
}

// Add event listeners to the button
userChoiceBtn.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
}) 





// userChoiceBtn ---   1
//                     2
//                     3