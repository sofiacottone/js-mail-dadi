// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

// creo una lista di email autorizzate
const emailList = ['nome@mail.it', 'nome.cognome@mail.it', 'cognome@mail.it', 'cognome.nome@mail.it', 'nome@mail.com', 'nome.cognome@mail.com', 'cognome@mail.com', 'cognome.nome@mail.com'];
console.log('emailList', emailList);

// chiedo all'utente l'email
const userEmail = prompt('Inserisci la tua email');
console.log('userEmail', userEmail)

// creo una variabile flag
let emailFound = false;

// scorro l'elenco delle email
for (let i = 0; i < emailList.length; i++) {
    const thisEmail = emailList[i];
    // console.log('this', thisEmail);

    // Per ogni email:
    // verifico se l'email dell'utente rientra nella lista (array)
    // Se la trovo nella lista -> mi appunto che l'ho trovata (nella viariabile)
    if (thisEmail === userEmail) {
        emailFound = true;
    }
    console.log('in the list?', emailFound);
}

// Alla fine del ciclo se nella variabile vedo che l'email c'è stampo "Email confermata! Procedi con l'accesso."
// altrimenti stampo "Email non trovata! Procedi con la registrazione."

// output all'utente
if (emailFound === true) {
    alert('Email confermata! Procedi con l\'accesso.');
} else {
    alert('Email non trovata! Procedi con la registrazione.');
}

