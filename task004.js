/*
Write a function maskify, which changes all but the last four characters into '#'.
*/


function maskify(str) {
    return str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
}


console.log(maskify('Batman!'));