/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function sayHello(name) {
  const currentUser = "Ciao" + " " + name;
  return currentUser;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(sayHello("Mario"));

//Risultato atteso se si passa 'Mario': // ciao Mario

// Ciao Mario
