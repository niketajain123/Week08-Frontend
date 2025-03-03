let value = 5;  
let fromUnit = "Feet";  
let toUnit = "Inch"; 

if (fromUnit === "Feet" && toUnit === "Inch") {
  console.log(value + " Feet = " + (value * 12) + " Inches");
} else if (fromUnit === "Inch" && toUnit === "Feet") {
  console.log(value + " Inches = " + (value / 12) + " Feet");
} else if (fromUnit === "Feet" && toUnit === "Meter") {
  console.log(value + " Feet = " + (value * 0.3048) + " Meters");
} else if (fromUnit === "Meter" && toUnit === "Feet") {
  console.log(value + " Meters = " + (value / 0.3048) + " Feet");
} else {
  console.log("Invalid unit conversion");
}
