console.log("Lets Go!");

const game =() => {
   let pScore=0;
   let cScore=0;
   
   const startGame =() => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click" , ()=>{
        introScreen.classList.add("fadeOut");
        matchScreen.classList.add("fadeIn");
    });
   };

   const playMatch =() => {
    const options = document.querySelectorAll(".options button");
    const playerHand= document.querySelector(".player-hand");
    const computerHand= document.querySelector(".computer-hand");
    
    const computerOptions = ["rock" , "paper" , "scissor"];

    options.forEach( option => {
        option.addEventListener("click" , function() {
            
            // const playerChoice=event.target.textContent.trim();
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[computerNumber];
            // here we call compare hands function

            compareHand(this.textContent, computerChoice);

            //Update images
            playerHand.src =`assets/${this.textContent}.svg` ;
            computerHand.src = `assets/${computerChoice}.svg` ;  
            
            console.log(playerHand);
          });
    });
   };

   const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent= pScore;
    computerScore.textContent= cScore;
   }

   const compareHand = (playerChoice , computerChoice) =>{
    const winner= document.querySelector(".starting");

    if(playerChoice === computerChoice){
        winner.textContent = "TIE" ;
        return;
    }

    if(playerChoice === "rock"){
        if(computerChoice === "scissor"){
            winner.textContent = "Player Wins !"
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = "Computer Wins !"
            cScore++;
            updateScore();
            return;
        }
       
    }

    if(playerChoice === "paper"){
        if(computerChoice === "scissor"){
            winner.textContent = "Computer Wins !"
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = "Player Wins !"
            pScore++;
            updateScore();
            return;
        }
      
    }

    if(playerChoice === "scissor"){
        if(computerChoice === "paper"){
            winner.textContent = "Player Wins !"
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = "Computer Wins !"
            cScore++;
            updateScore();
            return;
        }
       
    }
   }

   startGame();
   playMatch();
}

game();