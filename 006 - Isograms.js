/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/


const example1 = 'Dermatoglyphics';
const example2 = 'aba';
const example3 = 'moOse';


function isIsogram(str) {
    let tmp = '';
    for (ch of str.toLowerCase()) {
        if (tmp.includes(ch)) return false;
        else tmp += ch;
    }
    return true;
}


console.log(isIsogram(example1));
console.log(isIsogram(example2));
console.log(isIsogram(example3));