/*
Implement a function that receives two IPv4 addresses, and returns the number 
of addresses between them (including the first one, excluding the last one).
All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.
*/


const example1 = { start: "10.0.0.0", end: "10.0.0.50" };     //  50 
const example2 = { start: "10.0.0.0", end: "10.0.1.0" };      //  256 
const example3 = { start: "20.0.0.10", end: "20.0.1.0" };     //  246
const example4 = { start: "170.0.0.0", end: "170.1.0.0" };    //  65536
const example5 = { start: "50.0.0.0", end: "50.1.1.1" };      //  65793


function ipsBetween(start, end) {
    let s = start.split('.').map(str => Number(str));
    let e = end.split('.').map(str => Number(str));

    let count = [
        e[0] - s[0],
        e[1] - s[1],
        e[2] - s[2],
        e[3] - s[3]
    ];

    count[0] *= Math.pow(256, 3);
    count[1] *= Math.pow(256, 2);
    count[2] *= Math.pow(256, 1);

    return count.reduce((a, b) => a + b, 0);
}


console.log(ipsBetween(example1.start, example1.end));
console.log(ipsBetween(example2.start, example2.end));
console.log(ipsBetween(example3.start, example3.end));
console.log(ipsBetween(example4.start, example4.end));
console.log(ipsBetween(example5.start, example5.end));