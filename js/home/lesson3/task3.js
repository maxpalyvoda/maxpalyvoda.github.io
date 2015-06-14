// this variant not the best solution, too much lines of code

for (i=1; i<=100; i++) {
  if (i%3==0) {
    console.log('Fizz');
  }
  else if (i%5==0) {
    console.log('Buzz');
  }

  else if (i%5 !=0 && i%3 !=0) {
    console.log(i);
  }
}
