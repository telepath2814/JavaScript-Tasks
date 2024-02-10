/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/


const example1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
const example2 = ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'];


function isValidWalk(walk) {
    return walk.length == 10 &&
        walk.filter(d => d == 'n').length == walk.filter(d => d == 's').length &&
        walk.filter(d => d == 'w').length == walk.filter(d => d == 'e').length;
}


console.log(isValidWalk(example1));
console.log(isValidWalk(example2));