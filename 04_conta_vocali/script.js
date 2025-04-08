/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function vowelsCounter(targetWord) {
  let vowelsTotal = 0;
  for (let i = 0; i < targetWord.length; i++) {
    const vowelsChecker = targetWord[i].toLowerCase();
    if (
      vowelsChecker === "a" ||
      vowelsChecker === "e" ||
      vowelsChecker === "i" ||
      vowelsChecker === "o" ||
      vowelsChecker === "u"
    ) {
      vowelsTotal += 1;
    }
  }
  return vowelsTotal;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
