// esercizio 


var esercizio = {
  repo : "js-oggetti-studenti",
  istruzione: [["Creare un oggetto che descriva uno studente con le seguenti proprietà: ", ["nome", "cognome","età."]], ["Stampare a schermo attraverso il for in tutte le proprietà."], ["Creare un array di oggetti di studenti."], ["Ciclare su tutti gli studenti e stampare per ognuno nome e cognome"], ["Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: ", ["nome", "cognome","età."]]],
  augurio: "che la forza degli oggetti sia con voi :muscle:"
};

console.log(esercizio);

//Funzioni - 

function capitalize(str) { 
  if (typeof str !== 'string' ) return ' ';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
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
  console.log(key);
  console.log(studente[key]);
  var headerTable = `<th>${studente.key}</th>`;
  document.getElementById('nome_proprietà').insertAdjacentHTML('beforeend', `<th>${key}</th>` );
  document.getElementById('valore_proprietà').insertAdjacentHTML('beforeend', `<td>${studente[key]}</td>` );
}

//definisco una classe -StudentX che mi permette di poterla richiamare invece di rispecificare ogni volta gli elementi compilati l'oggetto - un po come una funzione 
class StudenteX {
  constructor(nome, cognome, età) {
    this.firstName = nome;
    this.surname = cognome;
    this.age = età;
  }
}

//array di oggetti contenenti le info designate
var studenti = [
  new StudenteX("Piero","Calmati",38),
  new StudenteX("Alterio","Prossimo",48),
  new StudenteX("Carlo","Stanco",39)
];

btnAdd = document.getElementById("bt_add");
btnRemoveLast = document.getElementById("bt_remove");

//attivo l'immissione dal submit - button
btnAdd.addEventListener("click", function () {

var nomeInput = document.getElementById("nome").value;
console.log(nomeInput);
//Trasformo l'iniziale in maiuscola prima di passarla all'array indistintamente da ciò che l'utente inserisce
var nomeInputCapitalize = capitalize(nomeInput);
console.log(nomeInputCapitalize);

var cognomeInput = document.getElementById("cognome").value;
console.log(cognomeInput);
//Trasformo l'iniziale in maiuscola prima di passarla all'array indistintamente da ciò che l'utente inserisce
var cognomeInputCapitalize = capitalize(cognomeInput);
console.log(cognomeInputCapitalize);

var etàInput = parseInt(document.getElementById("età").value);
console.log(etàInput);
//Non accetto campi vuoiti o non numeri - in caso contrario avviso l'utente mediante alert
if (nomeInput===""  || cognomeInput==="" || isNaN(etàInput)) {
  alert("I dati inseriti non sono corretti");
} else {
  studenti.push(new StudenteX(nomeInputCapitalize,cognomeInputCapitalize,etàInput));
  }
console.log(studenti);
});

//permetto di eliminare l'ultimo elemento inserito - con un campo chiave identificativo potrei permettere l'eliminazione selezionata e/o cercata search
btnRemoveLast.addEventListener("click", function () {
studenti.pop(new StudenteX());
console.log(studenti);
});










