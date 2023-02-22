// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

//creo una variabile const  kmUtente e assegno il valore di un prompt - trasformato in numero
//creo una variabile const etaPasseggero e assegno il valore di un prompt - trasformato in numero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

//creo una variabile let prezzo per calcolare il totale -> prezzo = 0,21 * kmUtente

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

//SE etaPasseggero < 18
    //prezzo = prezzo - prezzo * 0,2
//ALTRIMENTI SE etaPasseggero > 65
    //prezzo = prezzo - prezzo * 0,4

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca!

//restituisco il prezzo formattato con soli 2 decimali