function solve(input){
    let step = +input.pop();
    let output = [];
    for (let i = 0; i < input.length; i += step) {
        output.push(input[i]);      
    }
    return output.join('\n');
}