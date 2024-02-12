/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
*/


function getSum(a, b)
{
    if (a == b) return a;

    let result = 0;
    for (i = 0; i <= Math.max(a, b) - Math.min(a, b); i++) {
        result += Math.min(a, b) + i;
    }
    return result;
}


console.log(getSum(0, 3));