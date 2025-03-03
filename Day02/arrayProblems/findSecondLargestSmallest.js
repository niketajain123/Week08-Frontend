function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100); // Random 3-digit number
    }
    return numbers;
  }
  
  function findSecondLargestSmallest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
      }
  
      if (numbers[i] < smallest) {
        secondSmallest = smallest;
        smallest = numbers[i];
      } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
        secondSmallest = numbers[i];
      }
    }
  
    console.log("Second Largest: " + secondLargest);
    console.log("Second Smallest: " + secondSmallest);
  }
  
  let randomNumbers = generateRandomNumbers();
  console.log("Random Numbers: " + randomNumbers);
  findSecondLargestSmallest(randomNumbers);
  