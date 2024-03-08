// BONUS
// seleziono il bottone che deve generare i numeri random
const rollBtn = document.querySelector('#roll-btn');

// metto il bottone in ascolto dell’evento click
rollBtn.addEventListener('click', function () {
    const userRandomNumber = Math.floor((Math.random() * 6) + 1);
    const cpuRandomNumber = Math.floor((Math.random() * 6) + 1);

    document.querySelector('#user-dice-container').innerHTML = `<i class="bi bi-dice-${userRandomNumber}-fill"></i>`
    document.querySelector('#cpu-dice-container').innerHTML = `<i class="bi bi-dice-${cpuRandomNumber}-fill"></i>`

    console.log('user', userRandomNumber);
    console.log('cpu', cpuRandomNumber);


    // output all'utente
    let message;
    if (userRandomNumber === cpuRandomNumber) {
        message = 'Pareggio! 🎲'
    } else if (userRandomNumber > cpuRandomNumber) {
        message = 'Hai vinto! 🏆'
    } else {
        message = 'Hai perso! 😔'
    }

    document.querySelector('#user-message').innerHTML = message;
});
