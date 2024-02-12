/*
Detect whether or not string is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


const example1 = 'The quick brown fox jumps over the lazy dog';
const example2 = 'Hello World!';


function isPangram(str) {
    const letters = str.match(/[a-z]/ig).map(l => l.toLowerCase());
    let sorted = [];
    letters.forEach(l => {
        if (!sorted.includes(l)) sorted.push(l);
    });
    return sorted.length == 26;
}


console.log(isPangram(example1));
console.log(isPangram(example2));