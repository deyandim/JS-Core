function solve(input){
    let arr = input.split(" ");
    let newArr = [];
    for(let element of arr){        
        if(+element){
            newArr.push(element);
        }
    }
    let suffix;
    for(let el of newArr){
       switch(el % 10){
           case 1: suffix = "st";break;
           case 2: suffix = "nd";break;
           case 3: suffix = "rd";break;
           default: suffix = "th";break;
       }
        console.log(`${el}${suffix}`);        
    }    
}

solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');