function solve(input){
    let arr = input.split(" ");
    let newArr = [];
    for(element in arr){
        if(+arr[element]){
            newArr.push(+arr[element]);
        }
    }
    let suffix;
    for(el in newArr){
       switch(newArr[el] % 10){
           case 1: suffix = "st";break;
           case 2: suffix = "nd";break;
           case 3: suffix = "rd";break;
           default: suffix = "th";break;
       }
        console.log(`${newArr[el]}${suffix}`);        
    }    
}

solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');