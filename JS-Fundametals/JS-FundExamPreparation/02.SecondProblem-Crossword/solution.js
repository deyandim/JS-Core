function solve() {
   let generate = document.getElementsByTagName('button')[0];
   let totalPrice = 0;
   let averageDec = [];
   let products = [];

   let output = document.getElementsByTagName('textarea')[1];


   generate.addEventListener('click', generateStr);

   function generateStr() {
       let forniturs = JSON.parse(document.getElementsByTagName('textarea')[0].value);
       for (let item of forniturs) {
           let div = document.createElement('div');
           div.setAttribute('class', 'furniture');
           let pName = document.createElement('p');
           pName.textContent = `Name: ${item.name}`;
           let image = document.createElement('img');
           image.src = item.img;
           let pPrice = document.createElement('p');
           pPrice.textContent = `Price: ${item.price}`;
           let pDecFactor = document.createElement('p');
           pDecFactor.textContent = `Decoration factor: ${item.decFactor}`;
           let checkbox = document.createElement('input');
           checkbox.setAttribute('type', 'checkbox');


           div.appendChild(pName);
           div.appendChild(image);
           div.appendChild(pPrice);
           div.appendChild(pDecFactor);
           div.appendChild(checkbox);
           document.getElementById('furniture-list').appendChild(div);

       }
   }

   document.getElementsByTagName('button')[1].addEventListener('click', buy);

   function buy() {
       let arr = Array.from(document.getElementById('furniture-list').children);
       // console.log(arr);
       for (let item of arr) {
           let isChecked = item.getElementsByTagName('input')[0].checked;
           if (isChecked) {
               products.push(item.getElementsByTagName('p')[0].textContent.split(': ')[1]);
               // console.log(item);
               totalPrice += parseFloat(item.getElementsByTagName('p')[1].textContent.split(': ')[1]);
               averageDec.push(parseFloat(item.getElementsByTagName('p')[2].textContent.split(': ')[1]));
           }
       }
       let average = averageDec.reduce((a, b) => a + b) / averageDec.length;
       output.value += `Bought furniture: ${products.join(', ')}\n`;
       output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
       output.value += `Average decoration factor: ${average}`;


   }
}