let n = 8;
let power = 1;

while (power <= Math.pow(2, n) && power <= 256) {
  console.log("2^" + Math.log2(power) + " = " + power);
  power *= 2;
}
