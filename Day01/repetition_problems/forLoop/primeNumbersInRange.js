let start = 10;
let end = 50;

for (let num = start; num <= end; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && num > 1) {
    console.log(num + " is a Prime number.");
  }
}
