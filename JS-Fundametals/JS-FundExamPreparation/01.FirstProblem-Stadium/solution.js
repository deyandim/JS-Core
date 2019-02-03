function solve() {
    let btnLevski = Array.from(document.querySelectorAll('.Levski button'));
    let btnLtex = Array.from(document.querySelectorAll('.Litex button'));
    let btnVip = Array.from(document.querySelectorAll('.VIP button'));
    let outputResult = document.getElementById('output');
    // Seat {seatNumber} in zone {team/VIP} sector {sector}
    let totalPrice = 0;
    let fans = 0;
    let summaryBtn = document.querySelector('#summary button');
    let output = document.getElementsByTagName('span')[0];    
    
    summaryBtn.addEventListener('click', getResult);

    for (let i = 0; i < btnLevski.length; i++) {
        getName(btnLevski[i], i);
        btnLevski[i].addEventListener('click', levskiPlaces);
    }
    for (let i = 0; i < btnLtex.length; i++) {
        getName(btnLtex[i], i);
        btnLtex[i].addEventListener('click', litexPlaces);
    }
    for (let i = 0; i < btnVip.length; i++) {
        getName(btnVip[i], i);
        btnVip[i].addEventListener('click', vipPlaces);
    }

    function levskiPlaces(btn) {
        let zone = 'Levski';
        let button = this;
        if (button.value === 'true') {
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} is unavailable.\n`;
        } else {
            setColor(button);
            fans++;
            if (button.name == 'A') {
                totalPrice += 10;
            } else if (button.name == 'B') {
                totalPrice += 7;
            } else {
                totalPrice += 5;
            }   
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} was taken.\n`;
            button.setAttribute('value', 'true');
        }
    }
    function litexPlaces(btn) {
        let zone = 'Litex';
        let button = this;
        if (button.value === 'true') {
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} is unavailable.\n`;
        } else {
            setColor(button);
            fans++;
            if (button.name == 'A') {
                totalPrice += 10;
            } else if (button.name == 'B') {
                totalPrice += 7;
            } else{
                totalPrice += 5;
            }        
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} was taken.\n`;
            button.setAttribute('value', 'true');
        }
    }
    function vipPlaces() {
        let zone = 'VIP';
        let button = this;
        if (button.value === 'true') {
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} is unavailable.\n`;
        } else {
            setColor(button);
            fans++;
            if (button.name == 'A') {
                totalPrice += 25;
            } else if (button.name == 'B') {
                totalPrice += 15;
            } else {
                totalPrice += 10;
            }
            outputResult.textContent += ` Seat ${button.textContent} in zone ${zone} sector ${button.name} was taken.\n`;
            button.setAttribute('value', 'true');
        }
    }
    function getResult(){
        output.textContent = `${totalPrice} leva, ${fans} fans.`;
    }
    function getName(btn, index) {
        if (index === 0 || index === 3 || index === 6 || index === 9 || index === 12) {
            btn.setAttribute('name', 'A');
        } else if (index === 1 || index === 4 || index === 7 || index === 10 || index === 13) {
            btn.setAttribute('name', 'B');
        } else {
            btn.setAttribute('name', 'C');
        }
              
        return btn;
    }
    function setColor(btn) {
        btn.setAttribute('style', 'background-color: rgb(255,0,0)');
    }
}