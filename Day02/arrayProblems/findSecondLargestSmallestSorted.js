function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 900) + 100);
    }
    return numbers;
  }
  
  function findSecondLargestSmallestSorted(numbers) {
    numbers.sort((a, b) => a - b);
    let secondLargest = numbers[numbers.length - 2];
    let secondSmallest = numbers[1];
  
    console.log("Sorted Numbers: " + numbers);
    console.log("Second Largest: " + secondLargest);
    console.log("Second Smallest: " + secondSmallest);
  }
  
  let randomNumbers = generateRandomNumbers();
  console.log("Random Numbers: " + randomNumbers);
  findSecondLargestSmallestSorted(randomNumbers);
  