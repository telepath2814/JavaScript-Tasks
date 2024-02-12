/*
Return the number (count) of vowels in the given string.
*/


const example1 = 'rtrteoiurtrt';
const example2 = 'batman';


function getVowelsCount(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}


console.log(getVowelsCount(example1));
console.log(getVowelsCount(example2));