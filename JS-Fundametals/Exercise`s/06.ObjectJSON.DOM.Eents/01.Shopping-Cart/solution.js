function solve() {
    let mainDiv = Array.from(document.getElementById('exercise').children);
    let products = [];
    let totalPrice = 0;
    let firstProduct = Array.from(mainDiv[0].children);
    let secondProduct = Array.from(mainDiv[1].children);
    let thirdProduct = Array.from(mainDiv[2].children);

    let output = document.getElementsByTagName('textarea')[0];
    let btnResult = document.getElementsByTagName('button')[3];
    btnResult.addEventListener('click', buy)

    firstProduct[3].addEventListener('click', addMilk);
    secondProduct[3].addEventListener('click', addBread);
    thirdProduct[3].addEventListener('click', addTomatoes);


    function addMilk() {
        let nameOfProduct = firstProduct[1].textContent;
        let price = firstProduct[2].textContent.split(' ')[1];
        output.value += `Added ${nameOfProduct} for ${price} to the cart.\n`;
        if(!(products.includes(nameOfProduct))){
            products.push(nameOfProduct);
        }
        totalPrice += parseFloat(price);
    }
    function addBread() {
        let nameOfProduct = secondProduct[1].textContent;
        let price = secondProduct[2].textContent.split(' ')[1];
        output.value += `Added ${nameOfProduct} for ${price} to the cart.\n`;
        if(!(products.includes(nameOfProduct))){
            products.push(nameOfProduct);
        }
        totalPrice += parseFloat(price);
    }
    function addTomatoes() {
        let nameOfProduct = thirdProduct[1].textContent;
        let price = thirdProduct[2].textContent.split(' ')[1];
        output.value += `Added ${nameOfProduct} for ${price} to the cart.\n`;
        if(!(products.includes(nameOfProduct))){
            products.push(nameOfProduct);
        }
        totalPrice += parseFloat(price);
    }
    
    function buy() {
        output.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
    }

    
}