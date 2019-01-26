function solve() {
	let firstMatrix = document.getElementById('mat1').value;
	let secondMatrix = document.getElementById('mat2').value;
	let firstMatrixtOne = '';
	let firstMatrixTwo = '';
	firstMatrix = firstMatrix.slice(1, -1);
	
	console.log(firstMatrix);
	
	for (let matrix in firstMatrix) {
		if(!(firstMatrix[matrix] === '[' || firstMatrix[matrix] === ']')){
			firstMatrixtOne += firstMatrix[matrix];
		}
		
		
	}
	

	secondMatrix = secondMatrix.slice(1, -1);

	// 
	console.log(firstMatrixtOne);



}


// [[1, 2, 3], [4, 5, 6]] ,
// [[7, 9, 11], [8, 10, 12]]