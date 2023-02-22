'use strict';

const kmUtente = Number(prompt('Inserisci i km che vuoi percorrere'));
const etaPasseggero = Number(prompt('Inserisci la tua età'));

const prezzoKm = 0.21;

let messaggio = 'Prezzo biglietto';
let prezzo = prezzoKm * kmUtente;

// console.log({kmUtente});
// console.log({etaPasseggero});
// console.log({prezzo});

if(etaPasseggero < 18) {
    messaggio = 'Prezzo con sconto minorenne';
    //prezzo = prezzo - prezzo * 0.2;
    prezzo -= prezzo * 0.2;
    

} else if (etaPasseggero > 65) {
    messaggio = 'Prezzo con sconto over';
    //prezzo = prezzo - prezzo * 0.4;
    prezzo -= prezzo * 0.4;
    
}

const prezzoFinale = prezzo.toFixed(2);

console.log(`${messaggio}: ${prezzoFinale}€`);



