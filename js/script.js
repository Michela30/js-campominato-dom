/* 
1 il pc deve generare 16 num casuali(bombe), inserita in un array, no numeri doppi
2 se l'utente clicca su un numero bomba, cambia di colore rosso, perde
altrimenti continua il cambio azzurro
3 la partita termina
    - se hai schiacciato una bomba
    - se non hai più caselle disponibili ( da specificare)
    - 
4 al termina comunicare il punteggio
*/

const bombButton = document.querySelector('.bomba-button');
bombButton.classList.add('d-none');

const bombResultInPage = document.querySelector('.bomb-result');
bombResultInPage.classList.add('d-none');

const flagButton = document.querySelector('.flag-button');
flagButton.classList.add('d-none')

const arrayBomb = [];


// al click verrà generata una griglia
const generatorButton = document.getElementById('generator-button');
generatorButton.addEventListener('click', function(){

    //select difficoltà
    const selectDifficulty = document.getElementById('select-difficult').value;

    const cellRow = document.querySelector('.row');

    cellRow.innerHTML = '';

    for(let index = 1; index <= selectDifficulty; index ++){

        const cellSquare = document.createElement('div');
        const cellText = index;

        cellSquare.setAttribute('cellNumber', index)

        cellRow.append(cellSquare);
        cellSquare.append(cellText);

        cellSquare.classList.remove('square', 'square-easy','square-medium','square-hard')

        cellSquare.classList.add('square', `square-size-${selectDifficulty}`);

        
        
        //ciclo while per generare numero delle bombe
        
        const numberBomb = 16;

        let j = 0;
        while(arrayBomb.length < numberBomb){
            const bNumber = randomBomb(1,selectDifficulty);
            
            if(!arrayBomb.includes(bNumber)) {
                arrayBomb.push(bNumber);
            }
            
            j++;
        }
        
        console.log('array bombe',arrayBomb)

        //al click di ogni cella, questa si colora + messaggio in console

        cellSquare.addEventListener('click', function(){

            const cellNumber  = this.getAttribute('cellNumber')

            if(arrayBomb.includes(cellNumber)) {

                cellSquare.classList.add('square-bomb-clicked')
                console.log('sono una bomba')
            }else {
                cellSquare.classList.toggle('square-clicked');
                console.log('sono una cella')
            }
            
            printNumber(cellText);
        })

        // other buttons
        bombButton.classList.remove('d-none');
        flagButton.classList.remove('d-none');
    }
    
})

function printNumber(parametro){
    console.log(parametro)
}

function randomBomb(min, max){
    return Math.floor(Math.random() * max - min + 1 ) + min;
}

