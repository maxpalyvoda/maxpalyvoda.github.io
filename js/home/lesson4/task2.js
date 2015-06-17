/* 
Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false
*/

function checkSpam (str) {
  var stringToLowerVase = str.toLowerCase();
  return !!(~stringToLowerVase.indexOf('spam') || ~stringToLowerVase.indexOf('sex'));
}
console.log(checkSpam ('[SPAM] How to earn fast money?'));
