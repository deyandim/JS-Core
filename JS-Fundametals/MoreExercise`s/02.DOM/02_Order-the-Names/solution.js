function solve(){
    let input = document.getElementsByTagName('input')[0];
    let btn = document.getElementsByTagName('button')[0];


    btn.addEventListener('click', register);

    function register(){
        let listOfstudents = Array.from(document.querySelectorAll('ol li'));
        for (let i = 0; i < listOfstudents.length; i++){
            listOfstudents[i].setAttribute('id', String.fromCharCode(65 + i));
            let className = input.value[0];
            let id = listOfstudents[i].id;
            if(className === id){
                if(listOfstudents[i].textContent) {
                    listOfstudents[i].textContent += (`, ${input.value}`);
                }else {
                    listOfstudents[i].textContent += input.value;
                }
            }
        }
        document.getElementsByTagName('input')[0].value = '';
    }
}
