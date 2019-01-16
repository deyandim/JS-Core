function solve(arr){
    let totalMoney = 0;
    let change = 0;
    let part;
    
    for(element in arr){
        part = arr[element].split(", ");
        let price = 0;
        let money = part[0];
        let drink = part[1];
        // coffee with caffeine
        if(drink === "coffee" && part[2] === "caffeine"){
            price = 0.80;
            if(part.length == 5){
                if(part[3] === "milk"){
                    price += 0.10;
                }
                if(part[4] > 0){
                    price += 0.10;
                }
            }
            else{
                if(part[3] > 0){
                    price += 0.10;
                }
            }          
            if(money < price){
                let moneyNeeded = price - money;
                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);               
            }
            else{                
                change = money - price;
                totalMoney += +money - change;
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);                
            }
        }
        // coffee with decaf
        else if(drink === "coffee" && part[2] === "decaf"){
            price = 0.90;
            if(part.length == 5){
                if(part[3] === "milk"){
                    price += 0.10;
                }
                if(part[4] > 0){
                    price += 0.10;
                }
            }
            else{
                if(part[3] > 0){
                    price += 0.10;
                }
            }
            if(money < price){
                let moneyNeeded = price - money;
                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);               
            }
            else{                
                change = money - price;
                totalMoney += +money - change;
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);                
            }
        }
        // tea
        else{          
            price = 0.80;
            if(part.length == 4){
                if(part[2] === "milk"){
                    price += 0.10;
                }
                if(part[3] > 0){
                    price += 0.10;
                }
            }
            else{
                if(part[2] > 0){
                    price += 0.10;
                }
            }
            if(money < price){
                let moneyNeeded = price - money;
                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);               
            }
            else{
                
                change = money - price;
                totalMoney += +money - change;
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);               
            }
        }
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);    
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
'1.00, coffee, decaf, 0']);