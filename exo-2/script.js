// you can write js here
console.log('exo-2');

let isTesting = false; 
if (isTesting){
    const myDate = prompt("entrer la date d'aujourd'hui :"); 
    const myTime = prompt ("entrer l'heure :");
    isWeekend(myDate, myTime);
} else {
    const myDate = new Date();
    let nbOfDay = myDate.getDay();
    //console.log(nbOfDay);
    let myTime = myDate.getHours();
    //console.log(myTime);
    isWeekend(nbOfDay, myTime);
}





/*
if (nbOfDay == 1 || nbOfDay == 2){
    console.log(nbOfDay,"pas du tout");
} else if (nbOfDay == 3){
    console.log(nbOfDay,"pas encore")
} else if (nbOfDay == 4){
    console.log(nbOfDay,"bientot")
} else if (nbOfDay == 5){
    console.log(nbOfDay,"presque")
} else {
    console.log(nbOfDay,"c'est le weekend !");
} */

//isWeekend();
function isWeekend(nbOfDay, myTime){
    console.log(nbOfDay);
    console.log(myTime);
    if (nbOfDay == 0 || nbOfDay == 6 || (nbOfDay == 5 && myTime >= 17) || (nbOfDay == 1 && myTime < 9)) {
        console.log("c'est le weekend !");
        
    } else if (nbOfDay == 1 || nbOfDay == 2){
        console.log(nbOfDay,"pas du tout");
    } else if (nbOfDay == 3){
        console.log(nbOfDay,"pas encore")
    } else if (nbOfDay == 4){
        console.log(nbOfDay,"bientot")
    } else {
        console.log(nbOfDay,"presque")
    }
}

