(function () {
    let result = document.getElementById('output');
    let count = false;
    let chop = document.querySelectorAll('#operations button')[0];
    let dice = document.querySelectorAll('#operations button')[1];
    let spice = document.querySelectorAll('#operations button')[2];
    let bake = document.querySelectorAll('#operations button')[3];
    let fillet = document.querySelectorAll('#operations button')[4];



    chop.addEventListener('click', chopAction);
    dice.addEventListener('click', diceAction);
    spice.addEventListener('click', spiceAction);
    bake.addEventListener('click', bakeAction);
    fillet.addEventListener('click', filletAction);

    function chopAction() {
        
        if (result.textContent) {
            result.textContent /= 2;
        } else {
            let input = +document.getElementsByTagName('input')[0].value;
            if(!input){
                input = 0;
                document.getElementsByTagName('input')[0].value = 0;
            }
            result.textContent = input / 2;
        }

    }

    function diceAction() {
        if (result.textContent) {
            result.textContent = Math.sqrt(result.textContent);
        } else {
            let input = +document.getElementsByTagName('input')[0].value;
            if(!input){
                input = 0;
                document.getElementsByTagName('input')[0].value = 0;
            }
            result.textContent = Math.sqrt(input);
        }
    }

    function spiceAction() {
        if (result.textContent) {
            result.textContent = +result.textContent + 1;
            
            
        } else {
            let input = +document.getElementsByTagName('input')[0].value;
            if(!input){
                input = 0;
                document.getElementsByTagName('input')[0].value = 0;
            }
            result.textContent = input + 1;
        }
    }

    function bakeAction() {
        if (result.textContent) {
            result.textContent = +result.textContent * 3;
        } else {
            let input = +document.getElementsByTagName('input')[0].value;
            if(!input){
                input = 0;
                document.getElementsByTagName('input')[0].value = 0;
            }
            result.textContent = input * 3;
        }
    }

    function filletAction() {
        if (result.textContent) {
            result.textContent = +result.textContent * 0.8;
        } else {
            let input = +document.getElementsByTagName('input')[0].value;
            if(!input){
                input = 0;
                document.getElementsByTagName('input')[0].value = 0;
                
            }
            result.textContent = input * 0.8;
        }
    }

})();


//     case 'Dice': result = Math.sqrt(result);break;
//     case 'Spice': result = result + 1;break;
//     case 'Bake': result = result * 3;break;
//     case 'Fillet': result = result - (result * 0.2);
//     document.getElementById('output').textContent = result;return;
// }