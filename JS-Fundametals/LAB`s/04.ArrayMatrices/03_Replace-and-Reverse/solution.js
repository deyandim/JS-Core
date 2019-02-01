function solve() {
  let input = document.getElementById('arr').value;
  let inputArr = JSON.parse(input);
  let resultArr = [];
  let result = document.getElementById('result');

  inputArr.forEach((word) => resultArr.push(word.split('').reverse().join('')));
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = (resultArr[i][0].toUpperCase() + resultArr[i].slice(1));    
  }
  result.textContent = resultArr.join(' '); 
}

// (word[0].toUpperCase() + word.slice(1))