function solve([rows, cols, startRow, startCol]){
    let matrix = [];
    let n = 0;
    for (let row = 0; row < cols; row++) {
        
        matrix[row] = [];
        for (let col = 0; col < rows; col++) {
            matrix[row][col] = Math.max(Math.abs(startRow - row), Math.abs(startCol - col)) + 1;
        }
        
    }
    for (const item of matrix) {
        console.log(item.join(' '));        
    }
}

solve([5, 5, 2, 2]);