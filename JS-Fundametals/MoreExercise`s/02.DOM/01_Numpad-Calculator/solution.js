function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let expression = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let expressionArr = [];
    let result = '';
    for(let btn of buttons){
        if(+btn.value || btn.value === '.' || btn.value === '0'){
        btn.addEventListener('click', numbers); 
        }
        else if( btn.value !== '=' && btn.value !== 'Clear'){
            btn.addEventListener('click', operation);
                     
        }else if(btn.value === '='){
            btn.addEventListener('click', equal);
        }
        else{
            btn.addEventListener('click', clear);
        }
              
    }

    function numbers(e){
        let numberBtn = e.target;
        let numbers = numberBtn.value;

        expression.textContent += numbers;
        
        if (this.value === '.') {
            numberBtn.removeEventListener('click', action);
        }
        
    }
    function operation(e){
        let operatorBtn = e.target;
        expression.textContent += ` ${operatorBtn.value} `;
        // numbers = ''; 
        operatorBtn.removeEventListener('click', operation)      
    }
    function equal(e){
        
        expressionArr = expression.textContent.split(' ');
        let firstNum = +expressionArr[0];
        let operator = expressionArr[1];
        let secondtNum = +expressionArr[2];
        switch(expressionArr[1]){
            case '+': result = firstNum + secondtNum;break;
            case '-': result = firstNum - secondtNum;break;
            case '*': result = firstNum * secondtNum;break;
            case '/': result = firstNum / secondtNum;break;
        }

        resultOutput.textContent = result;       
    }
    function clear(){
        expression.textContent = '';
        resultOutput.textContent = '';
    }
    
    
}