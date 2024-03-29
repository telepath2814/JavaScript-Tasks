/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/


const example = [false, 1, 0, 1, 2, 0, 1, 3, "a"];


function moveZeros(arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}


console.log(moveZeros(example));