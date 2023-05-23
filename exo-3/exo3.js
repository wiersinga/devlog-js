// you can write js here
console.log('exo-3');

//console.log(playerInput.toLowerCase());
const choices = ['rock','paper','scissors'];
isJuste(choices);
var playerInput = prompt ("your choice (rock, paper, scissors) ?");
/*
function isJuste (choices){
for (let i = 0 ; i < choices.length ; i++ ) {

    if (playerInput == choices[i]){
        console.log(playerInput.toLowerCase());
    } else {
        console.log("erreur, essayer de nouveauy")
    }
}
}*/



let getPlayerChoice = getRandomChoice(choices);
console.log(getPlayerChoice);

function getRandomChoice(choices){
     const randomIndex= Math.floor(Math.random() * choices.length) ;
     const index = choices[randomIndex];
     return(index);
}