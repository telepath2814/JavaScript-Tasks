/*
Write a function maskify, which changes all but the last four characters into '#'.
*/


const example1 = '4556364607935616';
const example2 = 'What was the name of your first pet?';


function maskify(str) {
    return str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
}


console.log(maskify(example1));
console.log(maskify(example2));