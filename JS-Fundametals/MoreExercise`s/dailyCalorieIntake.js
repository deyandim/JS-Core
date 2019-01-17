function solve(arr, factor){
    let calories;
    let dailyCalories;
    let af;
    let sex = arr[0];
    let weight = +arr[1];
    let height = +arr[2];
    let age = +arr[3];
    let activeFactor = factor;
    if(sex === "m"){
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }
    else{
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }
    if(activeFactor == 0){
        af = 1.2;
    }
    else if(activeFactor == 1 || activeFactor == 2){
        af = 1.375;
    }
    else if(activeFactor > 2 && activeFactor < 6){
        af = 1.55;
    }
    else if(activeFactor == 6 || activeFactor == 7){
        af = 1.725;
    }
    else{
        af = 1.9;
    }
    dailyCalories = Math.round(calories * af);
    return dailyCalories;
}

console.log(solve(['m', 86, 185, 25], 3));
