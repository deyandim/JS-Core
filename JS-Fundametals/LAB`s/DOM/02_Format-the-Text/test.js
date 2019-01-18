function solve() {
    let mainParagraph = document.getElementById("input").textContent;
    let arr = mainParagraph.split(/[.!?]/);
    let count = 0;
    let key = 1;
    let obj = {};
    arr.pop();

    for (let el of arr) {
        if (count != 3) {
            if (!(key in obj)) {
                obj[key] = el + ".";
            } else {
                obj[key] += el + ".";
            }
        } else {
            key++;
            if (!(key in obj)) {
                obj[key] = el + ".";
            } else {
                obj[key] += el + ".";
            }
            count = 0;
        }
        count++;
    }

    for (let paraph in obj) {
        let p1 = document.createElement("p");
        document.getElementById("output").appendChild(p1);
        p1.textContent = obj[paraph];
    }
}