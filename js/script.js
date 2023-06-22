/* 
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
*/

const bombButton = document.querySelector('.bomba-button');
bombButton.classList.add('d-none');

const flagButton = document.querySelector('.flag-button');
flagButton.classList.add('d-none')



const generatorButton = document.getElementById('generator-button');
generatorButton.addEventListener('click', function(){

    // al click verrà generata una griglia
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

        //al click di ogni cella, questa si colora + messaggio in console

        cellSquare.addEventListener('click', function(){
            
            this.classList.toggle('square-clicked');
            console.log('sto cliccando i riquadri');

            printNumber(cellText);

        })

        bombButton.classList.remove('d-none');
        flagButton.classList.remove('d-none');
    }
    
    document.getElementById("generator-button").disabled = true;
    document.getElementById('button-reset').disabled = true;
})

function printNumber(parametro){
    console.log(parametro)
}

