function findRepeatedDigits() {
    let repeatedNumbers = [];
    for (let i = 0; i <= 100; i++) {
      let str = i.toString();
      if (str[0] === str[1]) {
        repeatedNumbers.push(str);
      }
    }
    return repeatedNumbers;
  }
  
  let repeatedNumbers = findRepeatedDigits();
  console.log("Repeated digits: " + repeatedNumbers);
  