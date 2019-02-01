function solve() {
  let input = document.getElementById('arr').value;
  let arrInput = JSON.parse(input);
  let result = document.getElementById('result');
  for (let i = 0; i < arrInput.length; i++) {
    const element = arrInput[i];
    let p = document.createElement('p');
    p.textContent = `${i} -> ${arrInput[i] * arrInput.length}`;
    result.appendChild(p);    
  }
}