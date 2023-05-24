// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
// supprimer le dernier element du tab
let deleteLast = secretMessage.pop();
console.log(secretMessage);

// ajouter deux elements a la fin du tab
let addLast = secretMessage.push('to','program');
console.log(secretMessage);

//Changer le mot 'easily' par 'right' en accédant au bon index du tableau
let indexEasily = secretMessage.indexOf('easily');
console.log(indexEasily);
secretMessage.splice(6,0,'right');
console.log(secretMessage);

// Utiliser une méthode pour supprimer le premier élément du tableau.
let deleteFirst = secretMessage.shift();
console.log(secretMessage);

//Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
let addFirst = secretMessage.unshift('Programming');
console.log(secretMessage);

//Utiliser une méthode pour remplacer la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'.
let changeByKnow = secretMessage.splice(5,6, 'know');
console.log(secretMessage);

//Utiliser la méthode `.join` pour afficher le message secret dans la console.
console.log(secretMessage.join());