// you can write js here
console.log('exo-3');
const choices = ['rock','paper','scissors'];
let playerInput = prompt ("your choice (rock, paper, scissors) ?");


console.log(getPlayerChoice(playerInput));

function getPlayerChoice (input){
    input = playerInput.toLowerCase();
    
    if (input == 'rock'){
        return (input)
    } else if (input == 'paper'){
        return (input)
    } else if (input == 'scissors'){
        return (input)
    } else if(input == 'bomb'){
        return 'bomb';
    } else {
        return ('error')
    }
}

let getComputerChoice = getRandomChoice(choices);
console.log(getComputerChoice);

function getRandomChoice(choices){
    const randomIndex= Math.floor(Math.random() * choices.length) ;
    const index = choices[randomIndex];
    return(index);
}

let result = findWinner(getPlayerChoice(playerInput), getComputerChoice);
//console.log(result);

function findWinner(playerChoice, computerChoice){
   
   
   
    if (playerChoice == computerChoice){
        return 'tied';
    } else  if (playerChoice == 'bomb'){
        return 'won';
    }
    else if (playerChoice !== computerChoice){
        
        if (playerChoice == 'rock' ){
            if (getComputerChoice == 'paper'){
                return 'lost';
            } 
            else {
                return 'won';
            }
        }
        
        if (playerChoice == 'paper'){
            if (computerChoice == 'rock'){
                return 'won';
            }     else {
                return 'lost';
            } 
        }
        
        if (playerChoice == 'scissors') {
            if(computerChoice == 'paper'){
                return 'won';
            } else {
                return 'lost';
            }
            
        } 
    } 
    else {
        return 0;
    }
}
playGame();
function playGame(){
    let uchoice= getPlayerChoice('paper');
    let computerChoice = getComputerChoice; 
    console.log(findWinner(uchoice, computerChoice));
    if (findWinner(uchoice, computerChoice) == 'won'){
        console.log("le vainqueur : le computer");
    } else {
        console.log("le vainqueur : toi");

    }
}







