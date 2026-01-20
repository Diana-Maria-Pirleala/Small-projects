function bmiCalculator (weight, height) {
  var bmi = Math.round(weight / (height * height));
  var result;

  if (bmi < 18.5) {
     result = "Your BMI is equal to " + bmi + ", so you are underweight.";
  }

  if (bmi > 18.5 && bmi < 24.9){
    result = "Your BMI is equal to " + bmi + ", so you have a normal weight.";
  }

  if (bmi > 24.9){
    result = "Your BMI is equal to " + bmi + ", so you are overweight.";
  }
  
  return result;
}
