function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let newArr = [];
  
  let result = document.getElementById('result');

  for (let i = 0; i < input.length; i++) {
    if(i % 2 === 0){
      newArr.push(input[i]);
    }
  }
  result.textContent = newArr.join(' x ');
}