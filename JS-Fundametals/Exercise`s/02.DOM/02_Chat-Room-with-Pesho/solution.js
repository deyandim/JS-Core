function solve() {
    function solve() {
        let myBtn = document.getElementsByTagName('button')[0];
        let peshoBtn = document.getElementsByTagName('button')[1];
        let myMessege = document.getElementById('myChatBox').value;
        let peshoMessege = document.getElementById('peshoChatBox').value;
        let chronology = document.getElementById('chatChronology');
    
    
    
        myBtn.addEventListener('click', ()=>{
            let span = document.createElement('span');
            let divChat = document.createElement('div');
            let param = document.createElement('p');
    
            span.textContent = 'Me';
            param.textContent = document.getElementById('myChatBox').value;
            divChat.appendChild(span);
            divChat.appendChild(param);
            divChat.style.textAlign = 'left'
            chronology.appendChild(divChat);
            document.getElementById('myChatBox').value = myMessege;
        });
        peshoBtn.addEventListener('click', ()=>{
            let span = document.createElement('span');
            let divChat = document.createElement('div');
            let param = document.createElement('p');
    
            span.textContent = 'Pesho';
            param.textContent = document.getElementById('peshoChatBox').value;
            divChat.appendChild(span);
            divChat.appendChild(param);
            divChat.style.textAlign = 'right';
            chronology.appendChild(divChat);
            document.getElementById('peshoChatBox').value = peshoMessege;
    
        });
    
    }
}