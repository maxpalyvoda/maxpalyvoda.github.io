// varian 1

 function pow (x, n) {
  var result = 1;
  for (var counter = 0; counter < n; counter++) {
<<<<<<< HEAD
    result *= x;
=======
    result *= x;
>>>>>>> origin/master
  }
    return result;
}
console.log(pow(2,3));


// variant 2

function pow(x, n) {
  if(n != 1) {
    return x * pow(x, n - 1);
} else {
    return x;
 }
}
<<<<<<< HEAD
console.log(pow(2, 3));
=======
console.log(pow(2, 3));
>>>>>>> origin/master
