// BONUS
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere tramite il bottone accedi,
// stampa un messaggio appropriato sull’esito del controllo nel DOM.

// creo una lista di email autorizzate
const emailList = ['nome@mail.it', 'nome.cognome@mail.it', 'cognome@mail.it', 'cognome.nome@mail.it', 'nome@mail.com', 'nome.cognome@mail.com', 'cognome@mail.com', 'cognome.nome@mail.com'];
console.log('emailList', emailList);

// metto in ascolto il bottone per leggere l'email scritta dall'utente nell'input
const accessButton = document.querySelector('#access-btn');
accessButton.addEventListener('click', function () {
    const userEmail = document.querySelector('#user-email');
    console.log('userEmail', userEmail.value)


    // creo una variabile flag
    let emailFound = false;

    // scorro l'elenco delle email
    for (let i = 0; i < emailList.length; i++) {
        const thisEmail = emailList[i];
        // console.log('this', thisEmail);

        // Per ogni email:
        // verifico se l'email dell'utente rientra nella lista (array)
        // Se la trovo nella lista -> mi appunto che l'ho trovata (nella viariabile)
        if (thisEmail === userEmail.value) {
            emailFound = true;
        }
    }
    console.log('in the list?', emailFound);

    // Alla fine del ciclo se nella variabile vedo che l'email c'è stampo "Email confermata! Procedi con l'accesso."
    // altrimenti stampo "Email non trovata! Procedi con la registrazione."

    // output all'utente
    let message;
    const inputContainer = document.querySelector('#input-container');
    const registerButton = document.querySelector('#register-btn');
    if (emailFound === true) {
        message = 'Email confermata! Procedi con l\'accesso.'
        inputContainer.classList.add('is-invalid');
        document.querySelector('.invalid-feedback').classList.add('text-success');
        document.querySelector('.invalid-feedback').innerHTML = message;

        registerButton.classList.add('btn-danger');
        registerButton.classList.remove('btn-success');

        accessButton.classList.add('btn-success');
        accessButton.classList.remove('btn-danger');

    } else {
        message = 'Email non trovata! Procedi con la registrazione.';
        inputContainer.classList.add('is-invalid');
        userEmail.classList.add('is-invalid');
        console.log('input class', inputContainer.classList)

        registerButton.classList.remove('btn-danger');
        registerButton.classList.add('btn-success');

        accessButton.classList.remove('btn-success');
        accessButton.classList.add('btn-danger');
    }
    document.querySelector('.invalid-feedback').innerHTML = message;

})

// faccio apparire un form di registrazione in caso di email non presente nella lista
const registerButton = document.querySelector('#register-btn');
registerButton.addEventListener('click', function () {
    document.querySelector('#register-form').classList.remove('d-none');
    document.querySelector('#register-form').classList.add('d-flex');
})
