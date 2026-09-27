let choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

let userScoreElement = document.querySelector("#user-score");
let computerScoreElement = document.querySelector("#computer-score");

let userChoiceElement = document.querySelector("#user-choice");
let computerChoiceElement = document.querySelector("#computer-choice");

let resultMessage = document.querySelector("#result-message");
let resetBtn = document.querySelector("#reset-btn");

let options = ["rock", "paper", "scissors"];


choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        let userChoice = choice.getAttribute("data-choice");

        let randomIndex = Math.floor(Math.random() * 3);
        let computerChoice = options[randomIndex];

        userChoiceElement.innerText = userChoice;
        computerChoiceElement.innerText = computerChoice;

        playGame(userChoice, computerChoice);
    });

});


function playGame(userChoice, computerChoice) {

    if (userChoice === computerChoice) {

        resultMessage.innerText = "It's a Draw!";

    }

    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        userScore++;
        userScoreElement.innerText = userScore;

        resultMessage.innerText = "You Win! 🎉";

    }

    else {

        computerScore++;
        computerScoreElement.innerText = computerScore;

        resultMessage.innerText = "Computer Wins! 🤖";
    }
}


resetBtn.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;

    userScoreElement.innerText = "0";
    computerScoreElement.innerText = "0";

    userChoiceElement.innerText = "-";
    computerChoiceElement.innerText = "-";

    resultMessage.innerText = "Make your move!";
});