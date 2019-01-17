function solve(arr) {
    let whiteDamage = 0; // Viktor
    let darkDamage = 0; // Naskor
    let counterWhite = {};
    let counterDark = {};
    let newArr = [];
    for (let el of arr) {
        newArr = el.split(" ");

        if (newArr[1] === "white") {
            if (!(newArr[0] in counterWhite)) {
                counterWhite[newArr[0]] = 1;
            } else {
                counterWhite[newArr[0]] += 1;
            }
            if (counterWhite[newArr[0]] === 2) {
                whiteDamage += +newArr[0] * 60 * 2.75;
                counterWhite[newArr[0]] = 1;

            } else {
                whiteDamage += +newArr[0] * 60;
            }
        } else {
            if (!(newArr[0] in counterDark)) {
                counterDark[newArr[0]] = 1;
            } else {
                counterDark[newArr[0]] += 1;
            }
            if (counterDark[newArr[0]] === 5) {
                darkDamage += +newArr[0] * 60 * 4.5;
                counterDark[newArr[0]] = 1;
            } else {
                darkDamage += +newArr[0] * 60;
            }
        }
    }
    if (whiteDamage > darkDamage) {
        console.log("Winner - Vitkor");
        console.log(`Damage - ${whiteDamage}`);
    } else {
        console.log("Winner - Naskor");
        console.log(`Damage - ${darkDamage}`);
    }


}

solve(["2 dark medenkas", "1 white medenkas", "2 dark medenkas", "2 dark medenkas", "15 white medenkas", "2 dark medenkas",
    "2 dark medenkas "
]);