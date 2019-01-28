function solve(input) {
    let matrix = [];
    let finalMatrix = [];
 
    for (let string of input) {
        matrix.push(string.split(' '));
    }
    let firstSum = 0;
    let secondSum = 0;

    let j = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        let diagonalOne = +matrix[i][i];
        let diagonalTwo = +matrix[j][i];
        firstSum += diagonalOne;
        secondSum += diagonalTwo;
        if (j != 0) {
            j--;
        }
    }
    let sum = firstSum;
    if (firstSum !== secondSum) {
        console.log(input.join('\n'));
    } else {
        
        let j = matrix[0].length - 1;
        for (let i = 0; i < matrix.length; i++) {
            let diagonalOne = +matrix[i][i];
            let diagonalTwo = +matrix[i][j];
            let result = [];
            for (let m = 0; m < matrix[i].length; m++) {
                
                if (diagonalOne && i == m) {
                    result.push(diagonalOne);
                }else if(m == matrix[i].length - i - 1){
                    result.push(diagonalTwo);
                }
                 else {
                    result.push(sum);
                }
            }
            finalMatrix.push(result);
            if (j != 0) {
                j--;
            }
        }
        for (let row of finalMatrix) {
            console.log(row.join(' '));
        }   
    }
}
solve(['1 1 1',
'1 1 1',
'1 1 0']);
