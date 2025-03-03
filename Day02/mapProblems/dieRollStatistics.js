function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  }
  
  function trackDieRolls() {
    let rollCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  
    let maxRollCount = 0;
    let minRollCount = Infinity;
    let maxRollNumber = null;
    let minRollNumber = null;
  
    while (maxRollCount < 10) {
      let rollResult = rollDie();
      rollCounts[rollResult]++;
  
      if (rollCounts[rollResult] > maxRollCount) {
        maxRollCount = rollCounts[rollResult];
        maxRollNumber = rollResult;
      }
  
      if (rollCounts[rollResult] < minRollCount && rollCounts[rollResult] > 0) {
        minRollCount = rollCounts[rollResult];
        minRollNumber = rollResult;
      }
    }
  
    console.log("Roll Counts: " + JSON.stringify(rollCounts));
    console.log("Number that reached maximum times: " + maxRollNumber + " with " + maxRollCount + " rolls");
    console.log("Number that reached minimum times: " + minRollNumber + " with " + minRollCount + " rolls");
  }
  
  trackDieRolls();
  