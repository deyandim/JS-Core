function solve(fruit, weight, price){
    weight = weight / 1000;
    let totalPrice = (weight * price).toFixed(2);
    console.log(`I need ${totalPrice} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve("orange", 2500, 1.80)