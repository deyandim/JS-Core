function solve(arr){  
    console.log(`Sum = ${arr.reduce((acc, a) => acc += parseFloat(a))}`);
    console.log(`Min = ${arr.reduce((acc, a) => Math.min(acc, a), Number.MAX_SAFE_INTEGER)}`);
    console.log(`Max = ${arr.reduce((acc, a) => Math.max(acc, a), Number.MIN_SAFE_INTEGER)}`);
    console.log(`Product = ${arr.reduce((acc, a) => acc *= a)}`);
    console.log(`Join = ${arr.join('')}`);
}