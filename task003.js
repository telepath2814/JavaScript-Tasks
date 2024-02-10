/*
Return the number (count) of vowels in the given string.
*/


function getVowelsCount(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}


console.log(getVowelsCount('rtrteoiurtrt'));