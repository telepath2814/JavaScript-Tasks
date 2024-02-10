/*
Найти в заданной строке самую длинную подстроку с четным количеством символов, и содержащую только буквы.
*/


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


console.log(getLongestEven('Asda12!8fhf  wqeqew( Rewqrg*)tyyUA'));