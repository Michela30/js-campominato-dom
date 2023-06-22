/* 
1 il pc deve generare 16 num casuali(bombe), inserita in un array, no numeri doppi
2 se l'utente clicca su un numero bomba, cambia di colore rosso, perde
altrimenti continua il cambio azzurro
3 la partita termina
    - se hai schiacciato una bomba
    - se non hai più caselle disponibili ( da specificare)
4 al termina comunicare il punteggio
*/

const bombButton = document.querySelector('.bomba-button');
bombButton.classList.add('d-none');

const bombResultInPage = document.querySelector('.bomb-result');
bombResultInPage.classList.add('d-none');

const flagButton = document.querySelector('.flag-button');
flagButton.classList.add('d-none');

const cellResultInPage = document.querySelector('.cell-result');
cellResultInPage.classList.add('d-none');

const gameOver = document.querySelector('.game-over');
gameOver.classList.add('d-none');

const arrayBomb = [];

let count = 0;
let bombCount = 0;

let gameIsRunning = true;

// al click verrà generata una griglia
const generatorButton = document.getElementById('generator-button');
generatorButton.addEventListener('click', function(){

    //select difficoltà
    const selectDifficulty = document.getElementById('select-difficult').value;

    const cellRow = document.querySelector('.row');
    cellRow.classList.add('d-flex')

    cellRow.innerHTML = '';

    for(let index = 1; index <= selectDifficulty; index ++){

        const cellSquare = document.createElement('div');

        cellSquare.setAttribute('cellNumber', index)

        cellRow.append(cellSquare);
        cellSquare.append(index);

        cellSquare.classList.remove('square', `square-size-${selectDifficulty}`, 'square-clicked', 'square-bomb-clicked')

        cellSquare.classList.add('square', `square-size-${selectDifficulty}`);

        cellResultInPage.classList.remove('d-none');
        bombResultInPage.classList.remove('d-none');

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
        
        //al click di ogni cella, questa si colora + messaggio in console

        
        cellSquare.addEventListener('click', function(){

            const cellNumber  = this.getAttribute('cellNumber');
            

            if(arrayBomb.includes(parseInt(cellNumber))) {

                cellSquare.classList.add('square-bomb-clicked')
                bombCount++
                
                bombResultInPage.classList.add('text-danger');
                bombResultInPage.innerHTML = `${bombCount}`;
                gameOver.classList.remove('d-none');
                cellRow.classList.add('d-none');
            
            }else {
                cellSquare.classList.add('square-clicked');
                count++
                
                cellResultInPage.classList.add('text-primary');
                cellResultInPage.innerHTML = `${count}`
            }

            countClick(count);
            console.log('count bomb', bombCount)
            
        })

        // other buttons
        bombButton.classList.remove('d-none');
        flagButton.classList.remove('d-none');

        const pressStart = document.querySelector('.press-start');
        pressStart.classList.add('d-none')
    }

    
    const cellSquare = document.createElement('div');
    
    //tasto reset
    const buttonReset = document.getElementById('button-reset');
    buttonReset.addEventListener('click', function(){

        gameOver.classList.add('d-none');
        cellRow.classList.remove('d-none');
        cellResultInPage.innerHTML= '';
        bombResultInPage.innerHTML= '';
        count = 0;
        bombCount = 0;
        cellSquare.classList.remove('square-clicked', 'square-bomb-clicked');
    })
    
})

/*function printNumber(parametro){
    console.log(parametro)
}*/

function randomBomb(min, max){
    return Math.floor(Math.random() * max - min + 1 ) + min;
}

function countClick(n){
    n + 1;
}
