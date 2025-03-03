let a = 10, b = 5, c = 2;
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let maxResult, minResult;

if (result1 >= result2 && result1 >= result3 && result1 >= result4) {
  maxResult = result1;
} else if (result2 >= result1 && result2 >= result3 && result2 >= result4) {
  maxResult = result2;
} else if (result3 >= result1 && result3 >= result2 && result3 >= result4) {
  maxResult = result3;
} else {
  maxResult = result4;
}

if (result1 <= result2 && result1 <= result3 && result1 <= result4) {
  minResult = result1;
} else if (result2 <= result1 && result2 <= result3 && result2 <= result4) {
  minResult = result2;
} else if (result3 <= result1 && result3 <= result2 && result3 <= result4) {
  minResult = result3;
} else {
  minResult = result4;
}

console.log("Arithmetic Operations Results:");
console.log("a + b * c = " + result1);
console.log("a % b + c = " + result2);
console.log("c + a / b = " + result3);
console.log("a * b + c = " + result4);

console.log("Maximum Result: " + maxResult);
console.log("Minimum Result: " + minResult);
