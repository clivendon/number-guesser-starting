let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    const randomNumber = Math.round(Math.random() * 9); //generates a random number between 0 and 9 
    return randomNumber; // returns the random number when called
}


// function to test if the human guess is a valid 0-9 number
function checkGuess(guess){
    if(guess >= 10 || guess < 0){
        window.alert('HEY DUDE I said a number between 0-9!!')
    }

}


function getAbsolutePosition(target, guess){
   let distance = Math.abs(target - guess);
   return distance;
}


function compareGuesses(humanGuess, computerGuess, targetNumber){
   const playerPosition = getAbsolutePosition(targetNumber, humanGuess);
   const compPosition = getAbsolutePosition(targetNumber, computerGuess);

   if(playerPosition <= compPosition){
    return true;
   }else if(playerPosition > compPosition){
    return false;
   }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }else if(winner === 'computer'){
    computerScore += 1;
  }
  }


function advanceRound(){
    currentRoundNumber += 1;
}
