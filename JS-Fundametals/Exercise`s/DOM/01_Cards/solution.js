function solve() {
    let playerOne = document.getElementById('player1Div').children;
    let divResultFirst = document.getElementById('result').children[0].textContent;
    let divResultecond = document.getElementById('result').children[2];
    // playerOne.setAttribute('onclick', 'changeImg()')
    // let click = document.getElementsByTagName('img').addEventListener('click', (e)=>{
    //     click.setAttribute('src', 'images/whiteCard.jpg');
    console.log(divResultFirst);
    
    // });
    for(let img of playerOne){
        img.addEventListener('click', ()=>{
            img.setAttribute('src', 'images/whiteCard.jpg');
            let names = document.createElement('p');
            names.textContent = "img.name";
        divResultFirst.appendChild(names)
        });
        

        console.log(divResultFirst);
        
    }
    // console.log(playerOne);
    
}
// .setAttribute('src', 'images/whiteCard.jpg');