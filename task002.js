/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
*/


const example1 = "the-stealth-warrior"; // "theStealthWarrior"
const example2 = "The_Stealth_Warrior"; // "TheStealthWarrior"
const example3 = "The_Stealth-Warrior"; // "TheStealthWarrior"


function toCamelCase(str) {
    return str.replace(/_[A-Za-z]|-[A-Za-z]/g, (match, offset) => {
        return str.slice(offset + 1, offset + 2).toUpperCase();
    });
}


console.log(toCamelCase(example1));
console.log(toCamelCase(example2));
console.log(toCamelCase(example3));