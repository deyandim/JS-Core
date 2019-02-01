function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let arrOfNum = [];
  let arrOfString = [];
  let numSorting = [];
  let result = document.getElementById('result');

  arrOfString = input.slice();
  arrOfNum = input.slice();

  arrOfNum.forEach(element => numSorting.push(+element));
  numSorting.sort((a,b)=>a-b);
 
  arrOfString.sort();
 
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  div1.textContent = numSorting.join(', ');
  div2.textContent = arrOfString.join(', ');
  result.appendChild(div1);
  result.appendChild(div2);
    
}