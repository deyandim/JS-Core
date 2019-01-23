let n = '7890123456';
let m = [2, 4, 8, 5, 10, 9, 7, 3, 6];
let wSum = 0;
let sum = 0;
for(let i = 0; i < 9; i++){
    wSum += m[i];
    // console.log(n[i]);
    
    sum += +n[i] * m[i];
}

console.log(sum % 11);
console.log(wSum % 11);
