const computerChoice = ['rock', 'paper', 'scissors']
//seelcts random computer choice
const computerPlay = (computerChoice) => { 
return computerChoice[Math.floor(Math.random()*computerChoice.length)]
 }

//get player selection
const playerSelection = 'rock';

 //function that plays a single round of the game
 const playRound = (playerSelection, computerSelection) => { 

   //case of draw
   if(playerSelection === computerSelection){
       return 'draw'
   }  
     //cases where player wins
if(playerSelection  === 'rock' && computerSelection === 'scissors'){
    return 'player wins'
}else if(playerSelection === 'paper' && computerSelection === 'rock'){
    return 'player wins'
}else if(playerSelection === 'scissors' && computerSelection ==='paper'){
    return 'player wins'
}
    //cases where computer wins
else if(computerSelection === 'rock' && playerSelection === 'scissors'){
    return 'computer wins'
}else if(computerSelection === 'paper' && playerSelection === 'rock'){
    return 'computer wins'
}else if(computerSelection === 'scissors' && playerSelection === 'paper'){
    return 'computer wins'
}

   
  }

  

  