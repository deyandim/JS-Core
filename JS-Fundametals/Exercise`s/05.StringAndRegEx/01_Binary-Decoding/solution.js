function solve() {
  let input = document.getElementById('str').value;
  let result = document.getElementById('result');
  let sum = 0;
  let binary = [];
  // find a sum
  input.split('').forEach(digit => {
    sum += +digit;
    if (sum === 10) {
      sum = 1;
    }
  });

  let newArr = input.split('');
  let count = 0;
  // split by 8 digit
  let str = '';
  for (let i = sum; i < newArr.length - sum; i++) {
    str += newArr[i];
    count++;
    if (count === 8) {
      binary.push(str);
      str = '';
      count = 0;
    }

  }
  console.log(binary.join('\n'));
  

  let pattern = /[a-zA-Z\s]*?/gm;
  let resultText = [];
  for (let item of binary) {

    let decimal = parseInt(item, 2);


    let letter = String.fromCharCode(decimal);

    if (pattern.test(letter)) {
      resultText.push(letter);
    }
  }

  console.log(resultText);


  result.textContent = resultText.join('');




}