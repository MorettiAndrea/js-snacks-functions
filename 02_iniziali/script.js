/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstChar(namesList) {
  const filtredLetters = [];
  for (let i = 0; i < namesList.length; i++) {
    const currentName = namesList[i];
    filtredLetters.push(currentName[0]);
  }
  return filtredLetters;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
