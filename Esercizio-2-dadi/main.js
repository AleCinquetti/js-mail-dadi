// OGGETTO ESERCIZIO
// Gioco dei dadi, chi fa di più vince.

var userNumber;
var pcNumber;
var msg;

userNumber = (Math.floor(Math.random() * 6 )+1);
pcNumber = (Math.floor(Math.random() * 6 )+1);

// tiro dado utente
alert("Tira il dado!");
alert(userNumber);

// tiro dado PC
alert('Il PC tira il dado');
alert(pcNumber);

if (userNumber > pcNumber) {
    msg = "Complimenti, hai vinto!"
} else if (userNumber < pcNumber) {
    msg = "Che peccato, non hai vinto!"
} else {
    msg = "Parità!"
}

document.getElementById('winner').innerHTML = msg;
