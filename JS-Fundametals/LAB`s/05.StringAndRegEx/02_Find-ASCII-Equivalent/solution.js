function solve() {
  let input = document.getElementById('str').value;
  let output = document.getElementById('result');
  let split = input.split(' ').filter(a => a !== '');
  let result = '';

  for (const item of split) {
    if(Number(item)){
      result += (String.fromCharCode(item));
    }else{
      let charToNum = [];
      for (let i = 0; i < item.length; i++) {
        charToNum.push(item[i].charCodeAt(0));       
      }
      let p = document.createElement('p');
      p.innerHTML = charToNum.join(' ');
      output.appendChild(p);
    }
  }
  let p2 = document.createElement('p');
      p2.innerHTML = result;
      output.appendChild(p2);
}