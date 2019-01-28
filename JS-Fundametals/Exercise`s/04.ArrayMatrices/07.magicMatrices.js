function solve(input) {
    let sum = input[0].reduce(add, 0);
    for (let i = 0; i < input.length; i++) {
        let rowSum = input[i].reduce(add, 0);
        if(rowSum !== sum){
            return false;
        }
        let colSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            colSum += +input[i][j];            
        }
        if(colSum !== sum){
            return false;
        }       
    }
    function add(a, b){
        return a + b;
    }
return true;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 2],
    [5, 5, 5]
]));