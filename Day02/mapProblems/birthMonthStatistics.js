function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generates a random number between 1 and 12
  }
  
  function trackBirthMonths() {
    let birthMonths = new Map();
  
    // Generate birth months for 50 individuals
    for (let i = 0; i < 50; i++) {
      let month = generateBirthMonth();
      if (birthMonths.has(month)) {
        birthMonths.get(month).push(i);
      } else {
        birthMonths.set(month, [i]);
      }
    }
  
    // Print individuals having birthdays in the same month
    birthMonths.forEach((individuals, month) => {
      console.log("Month " + month + ": Individuals " + individuals.join(", "));
    });
  }
  
  trackBirthMonths();
  