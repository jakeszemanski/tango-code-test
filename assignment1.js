var numberArray = [1, 5, 10, 2, 7];
var max = null;
var min = null;

var arrayLength = numberArray.length;
for (var i = 0; i < arrayLength; i++) {
  if (numberArray[i] > max) {
    max = numberArray[i];
  }
  if (numberArray[i] < min) {
    min = numberArray[i];
  }
}
var difference = max - min;
console.log(difference);