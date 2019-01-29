function solve() {
  let input = document.getElementById('arr').value;
  let result = document.getElementById('result');
  let arrInput = JSON.parse(input);
 
  let listOfReg = {};

  for (let number of arrInput) {
    let key = '';
    if(number.match(/^[B]{1}[A]{1}\s[0-9]{3}\s[0-9]{3}/gm)){
      key = 'BulgarianArmy';
      checkReg(key, listOfReg);
      
      
    }else if(number.match(/^[C]{1}[P]{1}\s[0-9]{2}\s[0-9]{3}/gm)){
      key = 'CivilProtection';
      checkReg(key, listOfReg);
    }
    else if(number.match(/^[C]{1}\s[0-9]{4}$|^[C]{1}[T]{1}\s[0-9]{4}$/gm)){
      key = 'Diplomatic';
      checkReg(key, listOfReg);
    }else if(number.match(/^[X]{2}\s[0-9]{4}/gm)){
      key = 'Foreigners';
      checkReg(key, listOfReg);
    }else if(number.match(/^[0-9]{3}\s[A-Z]{1}\s[0-9]{3}/gm)){
      key = 'Transient';
      checkReg(key, listOfReg);
    }else if(number.match(/^[C][B]\s[0-9]{4}\s[A-Z]{1,2}$|^[C][A]\s[0-9]{4}\s[A-Z]{1,2}$|^[C]\s[0-9]{4}\s[A-Z]{1,2}$/gm)){
      key = 'Sofia';
      checkReg(key, listOfReg);
    }else if(number.match(/^[A|B|D-Z]{1,2}\s[0-9]{4}\s[A-Z]{1,2}/gm)){
      key = 'Province';
      checkReg(key, listOfReg);
    }else{
      key = 'Other';
      checkReg(key, listOfReg);
    }
    
  }

  
  let valueSort = {};
  Object.keys(listOfReg).sort((a,b)=>{
    return b.strength - a.strength;
  }).forEach(function(key){
    valueSort[key] = listOfReg[key];
  });
  
  let newList = {};
  Object.keys(valueSort).sort().forEach(function(key){
    newList[key] = valueSort[key];
  });
 
  
  
 for (let key in newList) {
   let output = `${key} -> ${newList[key]}`;
   let p = document.createElement('p');
   p.textContent = output;
   result.appendChild(p);
   
 }
  

  
  function checkReg(k, arr){
    if(!(k in arr)){
      arr[k] = 1;
    }else{
      arr[k] += 1;
    }
    return arr;
  }
}