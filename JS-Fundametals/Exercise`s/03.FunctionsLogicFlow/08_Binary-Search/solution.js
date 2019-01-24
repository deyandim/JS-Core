function binarySearch() {
    let arrayOfNums = document.getElementById('arr').value;
    let num = document.getElementById('num').value;

    if(arrayOfNums.includes(num)){
        arrayOfNums = arrayOfNums.split(', ');
        let index = arrayOfNums.indexOf(num);
        document.getElementById('result').textContent = `Found ${num} at index ${index}`;       
    }
    else{
        document.getElementById('result').textContent = `${num} is not in the array`;
    }    
}