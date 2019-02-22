function solve(obj) {
    let biggestPrice = [];
    let currentPrice = 0;
    let carCount = 1;
    let townCount = 1;
    let townList = [];
    let modelCar = [];
    let pattern = RegExp('[A-Z]{1,2}[0-9]{4}[A-Z]{2}', 'gmi');
    for (let line of obj) {
        if (!(line.model in modelCar)) {
            modelCar[line.model] = 1;

        } else {
            modelCar[line.model] += 1;
        }
        if (!(line.town in townList)) {
            townList[line.town] = {
                'regNumber': line.regNumber,
                'price': line.price,
                'model': line.model
            };
            currentPrice = line.price;
        } else {
            townList[line.town].regNumber = `${townList[line.town].regNumber}, ` + `${line.regNumber}`;
            townList[line.town].price += Number(line.price);
            if (townList[line.town].price >= currentPrice) {
                biggestPrice = [line.town, townList[line.town].price];
            }
            currentPrice = line.price;
        }


    }

    let result = [];
    let output = [];
    for (let vehicle in modelCar) {
        output.push([vehicle, modelCar[vehicle]]);
    }

    output.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let car of obj) {

        if (car.model === output[0][0]) {
            result[car.town] = [];
            if (!(car.town in result)) {
                result[car.town].push(car.regNumber);
            }else{
                result[car.town] = [];
                    result[car.town].push(car.regNumber) ;
                
                
                
            }

        }

    }
    const ordered = {};
Object.keys(result).sort().forEach(function(key) {
  ordered[key] = result[key];
});
    

    // console.log(output[0][0]);
    // console.log(biggestPrice[0]);
    // console.log(townList);

console.log(`${biggestPrice[0]} is most profitable - ${biggestPrice[1]} BGN`);
console.log(`Most driven model: ${output[0][0]}`);
for (const town in ordered) {
    console.log(`${town}: ${ordered[town]}`);
    
}


    // Sofia is most profitable - 11 BGN
    // Most driven model: BMW
    // Sofia: C5959CZ
    // Varna: A3423SM, B1234SM
}

solve([{
        model: 'BMW',
        regNumber: 'B1234SM',
        town: 'Varna',
        price: 2
    },
    {
        model: 'BMW',
        regNumber: 'C5959CZ',
        town: 'Sofia',
        price: 8
    },
    {
        model: 'Tesla',
        regNumber: 'NIKOLA',
        town: 'Burgas',
        price: 9
    },
    {
        model: 'BMW',
        regNumber: 'A3423SM',
        town: 'Varna',
        price: 3
    },
    {
        model: 'Lada',
        regNumber: 'SJSCA',
        town: 'Sofia',
        price: 3
    }
])

// if (pattern.test(line.regNumber)){