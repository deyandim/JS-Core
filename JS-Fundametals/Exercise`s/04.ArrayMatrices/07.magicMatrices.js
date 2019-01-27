function solve(input) {
    let finalRowSum = [];
    let finalColSum = [];
    for (let i = 0; i < input.length; i++) {
        let colSum = 0;
        let rowSum = 0;

        for (let j = 0; j < input[i].length; j++) {
            rowSum += input[i][j];
            colSum += input[j][i];
        }
        if (colSum !== rowSum) {
            return false;
        }
        finalRowSum.push(rowSum);
        finalColSum.push(colSum);
    }
    for (let i = 0; i < finalRowSum.length; i++) {
        for (let j = 0; j < finalColSum.length; j++) {
            if (finalRowSum[i] !== finalColSum[j]) {
                return false;
            }
        }

    }

return true;

}

console.log(solve([
    [4, 5, 6],
    [6, 5, 2],
    [5, 5, 5]
]));