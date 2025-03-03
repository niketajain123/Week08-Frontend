function primeFactorization(n) {
    let factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) {
      factors.push(n);
    }
    return factors;
  }
  
  let number = 36; // Example number
  let primeFactors = primeFactorization(number);
  console.log("Prime Factors of " + number + " are: " + primeFactors);
  