let lower = 1;
let upper = 100;
let magicNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
let guess;

while (true) {
  guess = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  console.log("Is the magic number less than " + guess + "? (yes/no)");
  let userResponse = prompt(); // Take user input here

  if (userResponse === "yes") {
    upper = guess - 1;
  } else if (userResponse === "no") {
    lower = guess + 1;
  }

  if (lower === upper) {
    console.log("Magic number is: " + lower);
    break;
  }
}
