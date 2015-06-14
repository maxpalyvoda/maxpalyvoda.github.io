var boardSize = 50;
var emptySection = "";
for (var bordCounterOne = 0; bordCounterOne < boardSize; bordCounterOne++) {
  for (var bordCounterTwo = 0; bordCounterTwo < boardSize; bordCounterTwo++) {
    if ((bordCounterOne + bordCounterTwo) % 2 == 0)
      emptySection += " ";
    else
      emptySection += "#";
  }
  emptySection += "\n";
}

console.log(emptySection);
