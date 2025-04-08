/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function sayHi(person) {
  const hour = new Date().getHours();
  let targetName = person;
  let hello;

  if (hour < 13) {
    hello = "Buongiorno" + " " + targetName;
  } else if (hour < 17) {
    hello = "Buon pomeriggio" + " " + targetName;
  } else {
    hello = "Buonasera" + " " + targetName;
  }
  return hello;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHi(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
