function solve(arr, start, end){
    if(!(Array.isArray(arr))){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end >= arr.length){
        end = arr.length - 1;
    }   
    return arr.slice(start, end + 1).reduce((sum, el) => sum += Number(el), 0);
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));
