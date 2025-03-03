const year = parseInt(process.argv[2]);
if (isNaN(year)) {
  console.log("Please provide a valid year.");
  process.exit(1);
}
function isLeapYear(year) {
  if (year < 1000 || year > 9999) {
    return false;
  }
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

if (isLeapYear(year)) {
  console.log(`${year} is a Leap Year.`);
} else {
  console.log(`${year} is not a Leap Year.`);
}
