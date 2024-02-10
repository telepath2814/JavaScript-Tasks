/*
Detect whether or not string is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


function isPangram(str) {
    const letters = str.match(/[a-z]/ig).map(l => l.toLowerCase());
    let sorted = [];
    letters.forEach(l => {
        if (!sorted.includes(l)) {
            sorted.push(l);
        }
    });
    return sorted.length == 26;
}


console.log(isPangram('The quick brown fox jumps over the lazy dog'));