function solve(arr1, arr2, arr3) {
    let secondArr = [];
    let finalArr = [];
    let average;
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            secondArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr3.length; i++) {
        if (secondArr.includes(arr3[i])) {
            finalArr.push(+arr3[i]);
        }
    }
    average = finalArr.reduce(function(a, b){
        return a + b;
    }, 0) / finalArr.length;

    function median(finalArr){
        finalArr.sort(function(a,b){
        return a-b;
      });
    
      if(finalArr.length ===0) return 0
    
      var half = Math.floor(finalArr.length / 2);
    
      if (finalArr.length % 2)
        return finalArr[half];
      else
        return (finalArr[half - 1] + finalArr[half]) / 2.0;
    }
    finalArr = finalArr.sort();
    let output = median(finalArr);
    
    
    console.log("The common elements are " + finalArr.join(", ") + ".");
    console.log("Average: " + average + ".");
    console.log("Median: " + output + ".");
    
    
}

solve([5, 6, 50, 10, 1, 2],
    [5, 4, 8, 50, 2, 10],
    [5, 2, 50]);