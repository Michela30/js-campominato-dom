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

const flagButton = document.querySelector('.flag-button');
flagButton.classList.add('d-none')

const arrayBomb = [];

// al click verrà generata una griglia
const generatorButton = document.getElementById('generator-button');
generatorButton.addEventListener('click', function(){

    //select difficoltà
    const select = document.getElementById('select-difficult').value;

    const cellRow = document.querySelector('.row');

    for(let index = 1; index <= select; index ++){

        console.log('stampa tutti i numeri', index)

        const cellSquare = document.createElement('div');
        const cellText = index;

        cellRow.append(cellSquare);
        cellSquare.append(cellText);

        cellSquare.classList.remove('square', 'square-easy','square-medium','square-hard')

        if(select == 100){
            cellSquare.classList.add('square', 'square-easy');
        }else if(select == 81){
            cellSquare.classList.add('square','square-medium');
        }else{
            cellSquare.classList.add('square','square-hard');
        }
        
        //ciclo while per generare numero delle bombe
        
        const numberBomb = 16;

        let j = 0;
        while(arrayBomb.lenght < numberBomb){
            const bNumber = randomBomb(1,select);

            
            if(!arrayBomb.includes(bNumber)) {
                arrayBomb.push(bNumber);
            }
            
            j++;
        }
        
        


        //al click di ogni cella, questa si colora + messaggio in console

        cellSquare.addEventListener('click', function(){
            
            this.classList.toggle('square-clicked');
            console.log('sto cliccando i riquadri');

            printNumber(cellText);

        })

        // other buttons
        bombButton.classList.remove('d-none');
        flagButton.classList.remove('d-none');
    }
    

    document.getElementById("generator-button").disabled = true;
    document.getElementById('button-reset').disabled = true;
})

function printNumber(parametro){
    console.log(parametro)
}

function randomBomb(min, max){
    return Math.floor(Math.random() * max - min + 1 ) + min;
}