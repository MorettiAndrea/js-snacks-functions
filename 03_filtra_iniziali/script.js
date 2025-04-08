/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function filterByLetter(list) {
  const filtredArray = [];

  for (let i = 0; i < list.length; i++) {
    const currentName = list[i];
    if (currentName[0] === "A") {
      filtredArray.push(currentName);
    }
  }
  return filtredArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByLetter(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
