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



/*


Для красивого вызова indexOf применяется побитовый оператор НЕ '~'.
Дело в том, что вызов ~n эквивалентен выражению -(n+1), например:





alert( ~2 ); // -(2+1) = -3
alert( ~1 ); // -(1+1) = -2
alert( ~0 ); // -(0+1) = -1
alert( ~-1 ); // -(-1+1) = 0
Как видно, ~n — ноль только в случае, когда n == -1.

То есть, проверка if ( ~str.indexOf(...) ) означает, что результат indexOf отличен от -1, т.е. совпадение есть.

Вот так:

var str = "Widget";

if (~str.indexOf("get")) {
  alert( 'совпадение есть!' );
}
Вообще, использовать возможности языка неочевидным образом не рекомендуется, поскольку ухудшает читаемость кода.

Однако, в данном случае, все в порядке. Просто запомните: '~' читается как «не минус один», а "if ~str.indexOf" читается как "если найдено".

*/
