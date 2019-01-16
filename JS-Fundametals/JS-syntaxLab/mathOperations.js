function solve(firstNum, secondNum, operator){
    let result = 0;
    switch(operator){
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
        case "%": result = firstNum % secondNum; break;
        case "**": result = firstNum ** secondNum; break;

    }
    return result;
}

console.log(solve(4, 4, "+"));
