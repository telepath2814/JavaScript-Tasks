/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/


const example1 = "aba";
const example2 = "tester";
const example3 = "commit this";
const example4 = "";


function count(str) {
    let result = {};
    let checked = '';
    
    for (char of str) {
        if (!checked.includes(char)) {
            result[char] = str.match(new RegExp(char, 'g')).length;
            checked += char;
        }
    }
    return result;
}


console.log(count(example1));
console.log(count(example2));
console.log(count(example3));
console.log(count(example4));