function solve() {
    // input = ['cat',23 ,42 , function () { console.log('Hello world!'); }];
    let input = solve.arguments;
let obj = {};
    for (let item of input){
        console.log((`${typeof item}: ${item}`));
        if(!((typeof item)in obj)){
            obj[typeof item] = 1;
        }else{
            obj[typeof item]++;
        }
    }
    let sortedArguments = [];
    for (let item in obj){
        sortedArguments.push([item, obj[item]]);
    }
    sortedArguments.sort((a, b) => b[1] - a[1]);
    for (let item of sortedArguments){
        console.log(`${item[0]} = ${item[1]}`);
    }
}