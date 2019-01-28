function solve(input) {
    // input = ['remove', 'remove', 'remove', 'add', 'remove', 'add','remove'];
    let add = 'add';
    let remove = 'remove';
    let output = [];
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] === add) {
            output.push(i + 1);
        } else if(input[i] === remove && output.length > 0) {
            output.pop();
        }

    }
    if (!input.includes(add) || output.length === 0) {
        return 'Empty';
    }
    return output.join('\n');
}

