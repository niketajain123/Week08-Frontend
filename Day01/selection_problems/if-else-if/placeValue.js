let number = 100;
let placeValue;

if (number === 1) {
  placeValue = "Unit";
} else if (number === 10) {
  placeValue = "Ten";
} else if (number === 100) {
  placeValue = "Hundred";
} else if (number === 1000) {
  placeValue = "Thousand";
} else {
  placeValue = "Invalid Input";
}

console.log("Place Value: " + placeValue);
