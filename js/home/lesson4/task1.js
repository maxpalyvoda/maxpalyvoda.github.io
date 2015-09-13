/* Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.

Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. */

// recursion long ver.
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n-1) + fib(n-2);
  }
}
console.log(fib(7));

// recursion short (ternanry operator ver.)
function fib(n) {
  return n <= 1 ? n : fib(n-1) + fib (n-2);
}
console.log(fib(7));

//cycle
function fib(n) {
  var a=1; // the first num
  var b=1; // the second num
  for (i=3; i<=n; i++) { // counter starts from the 3rd number
    c=a+b; // 3rd number = sum of previous 2
    a=b; // now a is a second number
    b=c; // now b is a third number
  }
  return b;
}
console.log(fib(77));
