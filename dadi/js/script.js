// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero i due numeri random
const userRandomNumber = Math.floor((Math.random() * 6) + 1);
const cpuRandomNumber = Math.floor((Math.random() * 6) + 1);

console.log('user', userRandomNumber);
console.log('cpu', cpuRandomNumber);

// confronto i due numeri e stabilisco chi ha vinto in base a chi ha fatto il punteggio più alto
let message;
if (userRandomNumber === cpuRandomNumber) {
    message = 'Pareggio!'
} else if (userRandomNumber > cpuRandomNumber) {
    message = 'Hai vinto!'
} else {
    message = 'Hai perso!'
}

// output all'utente
console.log('result:', message);
alert(message + (' (Punteggio player: ' + userRandomNumber + ';') + (' Punteggio cpu: ' + cpuRandomNumber + ')'));