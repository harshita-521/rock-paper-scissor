console.log("Lets Go!");

const game = () => {
    let pScore = 0;
    let cScore = 0;
    let rounds = 0;
    let maxRounds = 5;


    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const entryScreen = document.querySelector(".entry");
        const matchScreen = document.querySelector(".match");
        const startBtn = document.querySelector(".entry button");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            entryScreen.classList.add("fadeIn");
        });

        startBtn.addEventListener("click", () => {
            entryScreen.classList.remove("fadeIn");
            entryScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        })


    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["ROCK", "PAPER", "SCISSOR"];

        options.forEach(option => {
            option.addEventListener("click", function () {


                if (rounds >= maxRounds) {
                    alert("Game Over! ");
                    return;
                }
                // const playerChoice=event.target.textContent.trim();
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // here we call compare hands function

                compareHand(this.textContent, computerChoice);

                //Update images
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;

                console.log(playerHand);
                rounds++;

                if (rounds === maxRounds) {
                    setTimeout(declareWinner, 500);
                }

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHand = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".starting");

        if (playerChoice === computerChoice) {
            winner.textContent = "TIE";
            return;
        }

        if (playerChoice === "ROCK") {
            if (computerChoice === "SCISSOR") {
                winner.textContent = "Player Wins !"
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins !"
                cScore++;
                updateScore();
                return;
            }

        }

        if (playerChoice === "PAPER") {
            if (computerChoice === "SCISSOR") {
                winner.textContent = "Computer Wins !"
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player Wins !"
                pScore++;
                updateScore();
                return;
            }

        }

        if (playerChoice === "SCISSOR") {
            if (computerChoice === "PAPER") {
                winner.textContent = "Player Wins !"
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins !"
                cScore++;
                updateScore();
                return;
            }

        }
    }

    const declareWinner = () => {
        const winner = document.querySelector(".starting");

        if (pScore > cScore) {
            winner.textContent = `🎉 You Win! Score: ${pScore} - ${cScore}`;
        } else if (pScore < cScore) {
            winner.textContent = `💀 You Lose! Score: ${pScore} - ${cScore}`;
        } else {
            winner.textContent = `🤝 It's a Tie! Score: ${pScore} - ${cScore}`;
        }
    };

    // const resetGame = () => {
    //     pScore = 0;
    //     cScore = 0;
    //     rounds = 0;
    //     updateScore();
    //     document.querySelector(".starting").textContent = "Let's Play!";
    // };

    startGame();
    playMatch();
}

game();