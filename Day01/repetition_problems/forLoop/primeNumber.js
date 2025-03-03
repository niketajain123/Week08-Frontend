let number = 29;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime && number > 1) {
  console.log(number + " is a Prime number.");
} else {
  console.log(number + " is not a Prime number.");
}
