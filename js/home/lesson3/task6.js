// varian 1

 function pow (x, n) {
  var result = 1;
  for (var counter = 0; counter < n; counter++) {
    result *= x; 
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
console.log(pow(2, 3)); 
