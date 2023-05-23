// you can write js here
console.log('exo-3');

//console.log(playerInput.toLowerCase());
const choices = ['rock','paper','scissors'];

var playerInput = prompt ("your choice (rock, paper, scissors) ?");
function getPlayerChoice (PlayerInput){
    playerInput = playerInput.toLowerCase;
    for (let i=0; i< choices.length; i++){
        if (playerInput == choices[i]){
            console.log(playerInput);
        } else {
            
            console.log();
        }
    }
}

let getComputerChoice = getRandomChoice(choices);
console.log(getComputerChoice);
function getRandomChoice(choices){
     const randomIndex= Math.floor(Math.random() * choices.length) ;
     const index = choices[randomIndex];
     return(index);
}