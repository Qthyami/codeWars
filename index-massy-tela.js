function bmi(weight, height) {
    let answ = weight / (Math.pow(height, 2));
    if (answ > 30 ) { return "Obese";
} else if (answ <= 30 && answ > 25) {
    return "Overweight";
} else if (answ <= 25.0 && answ > 18.5) {
    return "Normal";
} else if (answ <= 18.5) {
   return "Underweight"
  }
    }

    function bmi2(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }

}
    console.log(bmi(75,1.8));
    console.log(bmi2(75,1.8));
    