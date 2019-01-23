(function () {
    let btn = document.getElementsByTagName('button')[0];
    let yearType = document.querySelector('#year h2');
    let inputYearResult = document.querySelector('#year div');
    let result = '';

    btn.addEventListener('click', action);

    function action(){
       inputYear = Number(document.querySelector('#exercise input').value);
       if(((inputYear % 4 == 0) && (inputYear % 100 != 0)) || (inputYear % 400 == 0)){
           result = 'Leap Year';
        
       }else{
            result = 'Not Leap Year';
       }
       yearType.textContent = result;
       inputYearResult.textContent = inputYear;
       document.querySelector('#exercise input').value = '';
        
    }
})();