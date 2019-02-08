function solve() {
  let products = {};
  let profit = 0;

  // get the textareas
  let textareas = document.getElementsByTagName('textarea');
  let loadTextarea = textareas[0];
  let buyTextarea = textareas[1];
  let logTextarea = textareas[2];

  // get the buttons
  let buttons = document.getElementsByTagName('button');
  let loadBtn = buttons[0];
  let buyBtn = buttons[1];
  let endBtn = buttons[2];

  loadBtn.addEventListener('click', loadText);

  function loadText() {

    let input = JSON.parse(loadTextarea.value);
    for (let line of input) {
      if (!products.hasOwnProperty(line.name)) {
        products[line.name] = {
          price: line.price,
          quantity: line.quantity
        };
      } else {
        products[line.name] = {
          price: line.price,
          quantity: products[line.name].quantity + line.quantity
        };
      }
      logTextarea.value += `Successfully added ${line.quantity} ${line.name}. Price: ${line.price}\n`;
    }

  }
  buyBtn.addEventListener('click', buyProducts);

  function buyProducts() {
    let clientProd = JSON.parse(buyTextarea.value);
      if (products.hasOwnProperty(clientProd.name) && clientProd.quantity <= products[clientProd.name].quantity) {
        let orderMoney = clientProd.quantity * products[clientProd.name].price;
        products[clientProd.name].quantity -= clientProd.quantity;
        logTextarea.value += `${clientProd.quantity} ${clientProd.name} sold for ${orderMoney}.\n`;
        profit += orderMoney;    
      } else {
        logTextarea.value += 'Cannot complete order.\n';
      }
  }
  endBtn.addEventListener('click', endShop);
  
  function endShop(){
    logTextarea.value += `Profit: ${profit.toFixed(2)}\n`;
    loadBtn.removeEventListener('click', loadText);
    buyBtn.removeEventListener('click', buyProducts);
    endBtn.removeEventListener('click', endShop);
    
  }
}
//  load [{"name": "tomatoes", "price": 0.40, "quantity": 20}, {"name": "tomatoes", "quantity": 10, "price": 0.60}]
// buy {"name": "tomatoes", "quantity": 15}