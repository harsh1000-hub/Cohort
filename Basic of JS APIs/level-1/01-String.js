// Code about String useful functions/methods

// .length = give a length of the string
let fullName = "Harsh Vardhan";
console.log(fullName.length);

// indexof() = give a starting index of a string
console.log(fullName.indexOf("Vardhan"));

// lastIndexOf() = give a end index of a string
let funnyQuote = "Hey Hola Hola";
console.log(funnyQuote.lastIndexOf("Hola")) // give you last "Hola" index

// slice() = give you a substring from startIndex to endIndex(excluding)

console.log(funnyQuote.slice(0,6));

// substr() = give you a substring from starIndex and with how many length of substring you want
console.log(funnyQuote.substr(0,6));

/* 
Diff b/w slice() and substr() method is slice() optionally take two arguments(startIndex,endIndex) but in case of substr it takes both arguments
*/

// ----------------------------------------------------------
// replace() = give you a string with replaceable string
console.log(funnyQuote.replace("Hola","Mola"));
// If you want to replace last "hola" when there are multiple "hola"
let funnyMsg = "Hey Hola Hola Hola Hola";
let lastIndex = funnyQuote.lastIndexOf("Hola");
if (lastIndex !== -1) {
    let modifiedQuote = funnyMsg.slice(0, lastIndex) + "Mola" ;
      console.log(modifiedQuote);
} else {
    console.log("No occurrence of 'Hola' found in the string.");
}

// ---------------------------------------------------------

// split() = split the string on the basis of delimeter like (spaces,comma,any character) and return an array of string

let sentence = "Hey!How!are!you";
console.log(sentence.split("!"));  

// trim() = remove extra spaces from the starting and ending of the string

let poem = "  Hii Hee Hoo Hola    ";
console.log(poem.trim());

// toLowerCase and toUpperCase
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
