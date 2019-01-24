(function () {
    let allCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let optionHeart = document.getElementsByTagName('option')[0];
    let optionSpade = document.getElementsByTagName('option')[1];
    let optionDiamond = document.getElementsByTagName('option')[2];
    let optionClub = document.getElementsByTagName('option')[3];

    let heart = optionHeart.textContent.split(' ')[1];
    let spade = optionSpade.textContent.split(' ')[1];
    let diamond = optionDiamond.textContent.split(' ')[1];
    let club = optionClub.textContent.split(' ')[1];
    
    let outputSection = document.getElementById('cards');

    let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', getCards);

    function getCards() {
        let cardFrom = document.getElementById('from').value;
        let cardTo = document.getElementById('to').value;
        let start = allCard.indexOf(cardFrom);
        let end = allCard.indexOf(cardTo) + 1;
        let myCards = allCard.slice(start, end);


        for (let card of myCards) {
            let cardDiv = document.createElement('div');
            let p = document.createElement('p');
            let p3 = document.createElement('p');
            cardDiv.setAttribute('class','card');
            let pCard = document.createElement('p');
            pCard.textContent = card;
  

            if (optionHeart.selected) {
                p.textContent = heart;
                p3.textContent = heart;
            } else if (optionSpade.selected) {
                p.textContent = spade;
                p3.textContent = spade;
            } else if (optionDiamond.selected) {
                p.textContent = diamond;
                p3.textContent = diamond;
            } else if (optionClub.selected) {
                p.textContent = club;
                p3.textContent = club;
            }
            cardDiv.appendChild(p);
            cardDiv.appendChild(pCard);
            cardDiv.appendChild(p3);
            
            
            outputSection.appendChild(cardDiv);
        }
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';

    }
})();