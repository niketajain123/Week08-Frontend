let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
  let bet = Math.random() < 0.5 ? 1 : 0;
  if (bet === 1) {
    money++;
    wins++;
  } else {
    money--;
  }
  bets++;
}

console.log("Total bets made: " + bets);
console.log("Total wins: " + wins);
if (money === 0) {
  console.log("Gambler went broke.");
} else if (money === goal) {
  console.log("Gambler reached the goal of Rs 200.");
}
