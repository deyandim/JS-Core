function solve(input){
    let smallerNum = Number.MIN_SAFE_INTEGER;
    let output = []; 
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= smallerNum) {
           output.push(input[i]);
           smallerNum = input[i]; 
        }      
    }
    return output.join('\n');
}
