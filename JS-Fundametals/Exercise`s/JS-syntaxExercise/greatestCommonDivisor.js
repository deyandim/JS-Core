function solve(firstNum, secondNum){
    let min = Math.min(firstNum, secondNum);
    let greatestDivisor = 0;
    for(i = min; i > 0; i--){
        if(firstNum % i === 0 && secondNum % i === 0){
            greatestDivisor = i;
            return greatestDivisor;
        }
    }
}

console.log(solve(2154, 458));
