function solve(name, age, weightKg, heightCm){
    let bmi = Math.round(weightKg / (heightCm / 100 * heightCm / 100))
   
    
    function statusBMI(b){
        if(b < 18.5){
            return 'underweight';
        }else if (b < 25){
            return 'normal';
        }else if(b < 30){
            return 'overweight';
        }else{
            return 'obese';
        }
    }

    let charts = {
        name: name,
        personalInfo: {
            age: age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: statusBMI(bmi)
    }
    if(charts.status === 'obese'){
        charts.recommendation = 'admission required';
    }
    return charts;
}
console.log(solve('Pesho', 29, 99, 182));

// bmi = weight / height ** 2