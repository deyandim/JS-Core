function solve(input){
    let timeOfRotate = +input.pop();
    for (let i = 0; i < timeOfRotate % input.length; i++) {
        input.unshift(input.pop());       
    }
    return input.join(' ');
}
console.log(input);
