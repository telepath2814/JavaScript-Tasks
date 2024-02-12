/*
Find in a given string the longest substring with an even number of characters. Substring must contain only letters.
*/


const example1 = 'sda12!8fhf  wqeqew( Rewqrg*)tyyUA';


function getLongestEven(str) {
    let result = '';
    let strTmp = '';

   for(char of str) {
        if (char.match(/[A-Za-z]/g)) {
            strTmp += char;
        }
        else {
            if (strTmp.length % 2 == 0 && strTmp.length > result.length) {
                result = strTmp.slice();
            }
            strTmp = '';
        }
   }
   return result;
}


console.log(getLongestEven(example1));