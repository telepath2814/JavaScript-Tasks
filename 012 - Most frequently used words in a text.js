/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), 
returns an array of the top-3 most occurring words, 
in descending order of the number of occurrences.

Assumptions:
    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
    Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
    Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
    Matches should be case-insensitive, and the words in the result should be lowercased.
    Ties may be broken arbitrarily.
    If a text contains fewer than three unique words, 
    then either the top-2 or top-1 words should be returned, 
    or an empty array if a text contains no words.
*/


const example1 = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";
const example2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
const example3 = "  //wont won't won't";
const example4 = "  , e   .. ";
const example5 = "  ...  ";
const example6 = "  '  ";


function topThreeWords(text) {
    text = text.toLowerCase();

    let words = text.match(/\w+'\w+|'\w+'|'\w+|\w+|\w+'/g);
    if(!words) return [];
    words.sort();

    let result = [];
    while (words.length > 0) {
        result.push(words.splice(0, words.lastIndexOf(words[0]) + 1));
    }
    result.sort((a, b) => { return b.length - a.length });
    result = result.map(c => c[0]);
    result = result.slice(0, 3);

    return result;
}


console.log(topThreeWords(example1));
console.log(topThreeWords(example2));
console.log(topThreeWords(example3));
console.log(topThreeWords(example4));
console.log(topThreeWords(example5));
console.log(topThreeWords(example6));