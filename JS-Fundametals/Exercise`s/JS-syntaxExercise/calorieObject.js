function solve(arr){
    let output = "{";
    let newArr = [];
    for(i = 0; i < arr.length - 1; i+=2){
        newArr[arr[i]] = arr[i + 1];       
    }
    for(el in newArr){
        output += " " + el + ":" + " " + newArr[el] + ",";            
    }
    output = output.substring(0, output.length - 1)
    output += " }";
    console.log(output);       
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);