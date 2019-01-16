function solve(arg){
    let result;
    let input = typeof(arg);
    if(input == "number"){
        result =Math.pow(arg, 2) * Math.PI;
        return result.toFixed(2);
    }
    else{
        result = `We can not calculate the circle area, because we receive a ${input}.`;
        return result;     
    }
}
console.log(solve(2));
