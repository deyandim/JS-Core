function solve() {
    let myMessege = document.getElementById('myChatBox').value;
    let peshoMessege = document.getElementById('peshoChatBox').value;
    let chatChronology = document.getElementById('chatChronology');
    let myBtn = document.getElementsByTagName('button')[0];
    let peshoBtn = document.getElementsByTagName('button')[1];
    myBtn.setAttribute('onclick', 'run();');
    myBtn.onclick = function () {
        run();
    };

    function run() {
        let span = document.createElement('span');
        span.textContent = myMessege;
        chatChronology.appendChild(span);
        console.log(span);
        
        // chatChronology.appendChild(document.createElement('span').textContent = "Me");
        // chatChronology.appendChild(document.createElement('p').textContent = myMessege);

    }
    console.log(myBtn);



    if (myMessege.length > 0) {
        console.log(myMessege);

        chatChronology.appendChild(document.createElement('span').textContent = "Me");
        chatChronology.appendChild(document.createElement('p').textContent = myMessege);
    }



    // if (myMessege.length > 0) {
    //     console.log(myMessege);

    //     chatChronology.appendChild(document.createElement('span').textContent = "Me");
    //     chatChronology.appendChild(document.createElement('p').textContent = myMessege);
    // }

    //     });
    // }
}