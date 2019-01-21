function solve() {
    let buttons = document.querySelectorAll('#buttons button');
    let nextBtn = buttons[0];
    nextBtn.addEventListener('click', nextStep);

    let cancelBtn = buttons[1];
    // cancelBtn.addEventListener('click', cancel);

    let mainDiv = document.getElementById('content');

    let firstStep = document.getElementById('firstStep');
    let secondStep = document.getElementById('secondStep');
    let thirdStep = document.getElementById('thirdStep');

    function nextStep(){
        document.getElementById('content').style.backgroundImage = 'none';
        firstStep.style.display = 'block';
        let agreeBtn = document.getElementsByTagName('input')[0];

        
        if(agreeBtn.checked){
            firstStep.style.display = 'none';
            secondStep.style.display = 'block';
            setTimeout(function(){
                nextBtn.style.display = 'none';
            }, 0);
            setTimeout(function(){
                nextBtn.style.display = 'inline';
            }, 3000);
            // finish()
        }
       
        console.log(112);
        
    }

    function finish(){
        secondStep.style.display = 'none';
        thirdStep.style.display = 'block';
    }


    // console.log(mainDiv);
    
}