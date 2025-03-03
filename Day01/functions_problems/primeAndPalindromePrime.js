function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function getPalindrome(number) {
    let str = number.toString();
    let reversed = str.split('').reverse().join('');
    return parseInt(reversed);
  }
  
  function checkPrimePalindrome(num) {
    if (isPrime(num)) {
      console.log(num + " is a Prime number.");
      let palindrome = getPalindrome(num);
      console.log("Palindrome of " + num + " is: " + palindrome);
      if (isPrime(palindrome)) {
        console.log(palindrome + " is also a Prime number.");
      } else {
        console.log(palindrome + " is not a Prime number.");
      }
    } else {
      console.log(num + " is not a Prime number.");
    }
  }
  
  checkPrimePalindrome(13); // Example input
  