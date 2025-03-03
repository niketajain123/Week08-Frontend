function convertTemperature(deg, conversionType) {
    let result;
  
    switch (conversionType) {
      case 'CtoF':
        if (deg >= 0 && deg <= 100) {
          result = (deg * 9/5) + 32;
          console.log(deg + "°C is " + result + "°F");
        } else {
          console.log("Please enter a valid temperature between 0°C and 100°C");
        }
        break;
      case 'FtoC':
        if (deg >= 32 && deg <= 212) {
          result = (deg - 32) * 5/9;
          console.log(deg + "°F is " + result + "°C");
        } else {
          console.log("Please enter a valid temperature between 32°F and 212°F");
        }
        break;
      default:
        console.log("Invalid conversion type.");
    }
  }
  
  convertTemperature(25, 'CtoF');
  convertTemperature(77, 'FtoC');
  