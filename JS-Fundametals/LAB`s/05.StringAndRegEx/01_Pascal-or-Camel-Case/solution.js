function solve() {
  let inputString = document.getElementById('str1').value;
  let condition = document.getElementById('str2').value;
  let split = inputString.split(' ');
  let outputResult = document.getElementById('result');
  let result = '';
  

  if (condition === 'Camel Case') {
    for (let word of split) {
      upperCase(word, result);
    }
    result = result.replace(result[0], result[0].toLowerCase());

  } else if (condition === 'Pascal Case') {
    for (let word of split) {
      upperCase(word, result);
    }
  } else {
    result = 'Error!';
  }
  outputResult.textContent = result;

  function upperCase(words, finalRes) {
    words = words.toLowerCase();
    words = words.replace(words[0], words[0].toUpperCase());
    finalRes += word;
    return finalRes;
  }
}