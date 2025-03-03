function findSumOfThreeIntegers(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            result.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
    return result;
  }
  
  let numbers = [-1, 0, 1, 2, -2, -3, 3]; // Example input
  let triplets = findSumOfThreeIntegers(numbers);
  console.log("Triplets that sum to zero: " + JSON.stringify(triplets));
  