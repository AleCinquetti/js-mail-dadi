// OGGETTO ESERCIZIO
 // Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

 var mailList = [
     "lbj23@gmail.com",
     "miachaeljordan@gmail.com",
     "jonsnow@gmail.com",
     "stephcurry30@gmail.com",
     "thenightking@gmail.com",
     "nedstark@gmail.com",
     "cr7@gmail.com",
     "tyrionlannister@gmail.com",
     "lukeskywalker@gmail.com",
     "walterwhite@gmail.com", ];

 var yourMail = prompt("inserisci il tuo indirizzo eMail!");

 var msg;


for (var i = 0; i < mailList.length; i++) {

    if (yourMail == mailList[i]) {
        msg = "si";
        i = mailList.length;
    } else {
        msg = "NO";
    }
}

// if (yourMail != mailList[i]) {
//     msg = "NO";
// }

document.getElementById('mail').innerHTML = msg;
