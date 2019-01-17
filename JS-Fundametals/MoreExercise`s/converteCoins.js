function solve(coins, arr){
    let money = coins;
    let output = [];
    arr.sort(function(a, b){
        return b - a;
    });
for(i = 0; i < arr.length; i++){
    if(Math.floor(money / arr[i]) != 0){
        output.push(arr[i]);
        money -= arr[i];
        i--;
    }
}
    console.log(output.join(", "));    
}

solve(123, [5, 50, 2, 1, 10]);