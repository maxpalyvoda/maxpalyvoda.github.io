/*
Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
*/

// long ver. (if/else)
function cutStringMoreThanTwenty (str) {
  var stringLength = str.length;
  var maxStringLength = 20;
  if (stringLength > maxStringLength) {
    return str.slice(0, maxStringLength) + '...'
  }
  else {
  return str;
  }
}

// shorter ver (ternary operator)
function cutStringMoreThanTwenty (str) {
  var stringLength = str.length;
  var maxStringLength = 20;
  return (stringLength > maxStringLength) ? str.slice(0, maxStringLength) + '...' : str;
}


console.log(cutStringMoreThanTwenty("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
