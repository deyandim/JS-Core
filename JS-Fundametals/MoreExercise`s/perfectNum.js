function solve(arr){
    let newArr = [];
    let output = [];
    let sum;
    for(let num of arr){
        newArr = [];
        for(i = 1; i < num; i++){
            if(num % i == 0){
                newArr.push(i);    
            }            
        }
        sum = newArr.reduce(function(a, b){
            return a + b;
        }, 0);
        if(sum == num){
            output.push(num);
        }
    }
    if(output.length === 0){
        return "No perfect number";       
    }    
    return output.join(", ");    
}

console.log(solve([5, 32, 82]));
