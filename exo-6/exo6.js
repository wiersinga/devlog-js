
// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
console.log(joeInfo);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo);

const team = {
    players :[{
        firstName : "Pablo",
        lastName: "Sanchez",
        age: 11, }],
    games: [{
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27,
        }], 
        
        addPlayer(firstName, lastName, age){
            return this.players.push({
                firstName,
                lastName,
                age,
            })
        },
        
        matchs(opponent, teamPoints, opponentPoints){
            return this.games.push({
                opponent,
                teamPoints,
                opponentPoints,
            })
        },
    }
    
    team.addPlayer("olfa","jele",26);
    team.addPlayer("hicham","abc",24);
    
    console.log(team); 
    team.matchs("Amour",800,450);
    
    console.log(team);
    
    //console.log(team.games[0].teamPoints);
    let somme = team.games[0].teamPoints + team.games[1].teamPoints ;
    console.log(somme);
    
    let moyenne = (team.games[0].opponentPoints + team.games[1].opponentPoints)/ team.games.length;
    console.log(moyenne);
    
    letsSum();
    console.log(letsSum());
    
    function letsSum(){
        let sum = 0;
        for (let i=0; i < team.games.length; i++){
            sum += team.games[i].teamPoints;
        }
        return sum;
    }
    
    whoIsAged();
    console.log(whoIsAged());
    
    function whoIsAged(){
        let ageMax= 0;
        let index=0;
        for (let i=0; i < team.players.length-1; i++){
            if (team.players[i].age > team.players[i+1].age){
                ageMax = team.players[i].age;
                index = i;
            } else {
                ageMax = team.players[i+1].age;
                index = i+1;
            }
        }
        
        return (team.players[index]);
    }
    
   
    

let teamSort= team.players.sort(function(a,b){
    let majA = a.firstName.toUpperCase()
    let majB= b.firstName.toUpperCase()
    return majA.localeCompare(majB)
}) 
console.log(teamSort);






