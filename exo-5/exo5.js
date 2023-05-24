// you can write js here
console.log('exo-5');

let input = 'Good Morning Baleino'
let vowels =['a','e','i','o','u','y'];
let resultArray = [];


for (const char of input){
    //console.log(char);
    let index = vowels.indexOf(char);
    console.log(index);
    if (index >= 0){
    
    let newChar= char.toUpperCase();
    resultArray.push(newChar);
    //console.log(newChar);
    }    
}
console.log(resultArray.join('-'));



        
        
        
        









