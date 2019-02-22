let manager = function (){
    let storage = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    let recipe = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5 , fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };
    return function (command){

        if(command === 'report'){
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }else{
            const input = command.split(' ');

            if(input[0] === 'restock'){
                storage[input[1]] += Number(input[2]);
                return 'Succes';

            }else if (input[0] === 'prepare'){
                let product = input[1];
                let quantity = input[2];
                let result = '';
                
                for (let item in recipe[product]) {
                    if(recipe[product][item] * quantity > storage[item]){
                        result = `Error: not enough ${item} in stock`;
                        return result;
                    }                    
                }
                for (let item in recipe[product]) {                   
                        storage[item] -= recipe[product][item] * quantity;                   
                }
                return 'Succes';
            }
        }
    }

    
    
    
}
console.log(manager('prepare cheverme 1'));
    console.log(manager('restock protein 10'));
    console.log(manager('prepare cheverme 1'));
    console.log(manager('restock carbohydrate 10'));
    console.log(manager('prepare cheverme 1'));
    console.log(manager('restock fat 10'));
    console.log(manager('prepare cheverme 1'));
    console.log(manager('restock flavour 10'));
    console.log(manager('prepare cheverme 1'));
    console.log(manager('report'));






