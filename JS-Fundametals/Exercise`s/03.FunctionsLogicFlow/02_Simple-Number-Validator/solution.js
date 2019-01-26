(function () {
    let sum = 0;
    let btn = document.getElementsByTagName('button')[0];
    let result = document.getElementById('response');
    btn.addEventListener('click', validate);
    console.log(btn);
    
    

    function validate(){
        let input =  document.getElementsByTagName('input')[0].value;
        let lastNum = (input)% 10;
        console.log(lastNum);
        
        let weightNums = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for(i = 0; i < 9; i++){
            sum += +input[i] * weightNums[i];
        }
        if(sum % 11 === 0 || sum % 11 === 10){
            result.textContent = 'This number is Valid!';
        }else{
            result.textContent = 'This number is NOT Valid!';
        }
    }
})();