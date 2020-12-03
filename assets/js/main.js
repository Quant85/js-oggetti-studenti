// esercizio 


var esercizio = {
  repo : "js-oggetti-studenti",
  istruzione: [["Creare un oggetto che descriva uno studente con le seguenti proprietà: ", ["nome", "cognome","età."]], ["Stampare a schermo attraverso il for in tutte le proprietà."], ["Creare un array di oggetti di studenti."], ["Ciclare su tutti gli studenti e stampare per ognuno nome e cognome"], ["Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: ", ["nome", "cognome","età."]]],
  augurio: "che la forza degli oggetti sia con voi :muscle:"
};

console.log(esercizio);


//1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  nome: "Antonio",
  cognome: "Quattrocchi",
  età: 35
};

console.log(studente);
//var nomeChiaviOggetto = Object.keys(studente);

//2. Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente) {
  console.log(studente[key]);
  console.log(key);
  var headerTable = `<th>${studente.key}</th>`;
  document.getElementById('nome_proprietà').insertAdjacentHTML('beforeend', `<th>${key}</th>` );
  document.getElementById('valore_proprietà').insertAdjacentHTML('beforeend', `<td>${studente[key]}</td>` );
}

var studenti = [
  studente1 = {
  nome: "Piero",
  cognome: "Calmati",
  età: 38
  },
  studente2 = {
  nome: "Alterio",
  cognome: "Prossimo",
  età: 48
  },
  studente3 = {
  nome: "Carlo",
  cognome: "Stanco",
  età: 39
  }
];

var nome = prompt("Inserisci il nome dello studente");
var cognome = prompt("Inserisci il cognonome dello studente");
var età = parseInt(prompt("Inserisci l'età dello studente"));
studente4 = {
  nome: nome,
  cognome: cognome,
  età: età
};
studenti.push(studente4);
console.log(studenti);





