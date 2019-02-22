function solve(arr){
    return (function(){       
        return arr.reduce((acc, a) => Math.max(acc, a), Number.MIN_SAFE_INTEGER);
    })();
}

console.log(solve([1, 44, 123, 33]));
