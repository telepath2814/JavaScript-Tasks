/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/


const example1 = "camelCasingTest";
const example2 = "identifier";
const example3 = "";


function solution(str) {
    return str.replace(/[A-Z]/g, ' $&');
}


console.log(solution(example1));
console.log(solution(example2));
console.log(solution(example3));