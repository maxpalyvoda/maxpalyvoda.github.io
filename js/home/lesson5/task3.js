var numbers = [];
while(true) {
  var value = prompt ('enter a number', 0);
  if (value == ' ' || value == null || value == isNaN) {
    break;
  }
  numbers.push(value); // +value
}
var sum = 0;
for (var i=0; i<numbers.length; i++) {
  sum += numbers[i];
  
}
console.log(sum);
