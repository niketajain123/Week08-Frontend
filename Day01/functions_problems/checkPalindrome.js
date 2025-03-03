function isPalindrome(number) {
    let str = number.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  function checkPalindrome(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
      console.log(num1 + " and " + num2 + " are both Palindromes.");
    } else {
      console.log(num1 + " or " + num2 + " is not a Palindrome.");
    }
  }
  
  checkPalindrome(121, 1221); // Example input
  