function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let search = +document.getElementById('num').value;
  let resultSpan = document.getElementById('result');
  let arrOfMatches = [];

  function findElement(element, arrayOfInput) {
    for (let item of arrayOfInput) {
        let result = item.includes(element);
        let index = item.indexOf(element);
      arrOfMatches.push(`${result} -> ${index}`);
    }
    return arrOfMatches;
  }

  let output = findElement(search, input);
  resultSpan.innerHTML = output;

}