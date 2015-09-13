 menu = {
    width: 100,
    height: 400,
    title: 'Cool image'
  };

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric (obj) {
    for (key in obj) {
      if (isNumeric(obj[key])) {
        obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// вопрос, решил задачу с помощю гугл, как можно решить без написанной проверки

//comments

/* function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

Метод parseFloat преобразует строковый аргумент в число с плавающей точкой.
Если во время преобразования он обнаруживает неподходящий символ, то заканчивает процесс и возвращает результат.
Если аргумент не может быть преобразован в число - возвращает NaN

isFinite(number)
Возвращает false, если аргумент является NaN, положительной или отрицательной бесконечностью. Иначе возвращает true.

*/
