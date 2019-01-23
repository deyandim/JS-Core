function solve() {
    let playersCards = Array.from(document.querySelectorAll('.cards img'));

    let history = document.getElementById('history');



    playersCards.forEach(function (img) {
        img.addEventListener('click', actionOne);
    });

    function actionOne() {

        // console.log(playerCard);

        this.src = 'images/whiteCard.jpg';
        let name = this.name;
        this.removeEventListener('click', actionOne);
        let parent = this.parentNode;
        let currentNameOne = document.querySelectorAll('#result span')[0];
        let currentNameTwo = document.querySelectorAll('#result span')[2];
        if (parent.id === 'player1Div') {
            currentNameOne.textContent = name;

        } else if (parent.id === 'player2Div') {
            currentNameTwo.textContent = name;
        }

        let leftSpan = currentNameOne;
        let rightSpan = currentNameTwo;
        if (currentNameOne.textContent && currentNameTwo.textContent) {
            let winner;
            let looser;
            if (+rightSpan.textContent > +leftSpan.textContent) {
                winner = document.querySelector(`#player1Div img[name='${leftSpan.textContent}']`);
                looser = document.querySelector(`#player2Div img[name='${rightSpan.textContent}']`);


            } else {
                winner = document.querySelectorAll(`#player2Div img[name='${rightSpan.textContent}']`);
                looser = document.querySelectorAll(`#player2Div img[name='${leftSpan.textContent}']`);

            }

            looser.style.border = '2px solid darkred';
            winner.style.border = '2px solid green';

            history.textContent += `[ ${currentNameOne.textContent} vs ${currentNameTwo.textContent} ] `;
            currentNameOne.textContent = '';
            currentNameTwo.textContent = '';
        }





    }
}