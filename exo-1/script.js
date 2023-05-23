// you can write js here
console.log('hello from file');
var kelvins= prompt("quelle est la température en kelvius aujourd'hui ? ");

// Convertir la température en Kelvins en stockant le résultat dans une variable nommée `celsius`.
let celsius = kelvins - 273 ;
console.log("la temperature en celsius est :",celsius, "°");
// la température en Fahrenheit
let fahrenheits = celsius * (9/5) + 32;
console.log("la temperature en fahrenheit est :",Math.floor(fahrenheits));