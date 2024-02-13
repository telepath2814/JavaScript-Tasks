/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/


const example1 = 0;      //  00:00:00
const example2 = 90;     //  00:01:30
const example3 = 3600;   //  01:00:00
const example4 = 45296;  //  12:34:56
const example5 = 359999;  // 99:59:59


function humanReadable(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds / 60) - h * 60;
    const s = seconds - Math.floor(seconds / 60) * 60;
    
    const time = [h, m, s].map(i => {
        return i >= 10 ? i.toString() : '0' + i.toString();
    });
    return `${time[0]}:${time[1]}:${time[2]}`;
}


console.log(humanReadable(example1));
console.log(humanReadable(example2));
console.log(humanReadable(example3));
console.log(humanReadable(example4));
console.log(humanReadable(example5));