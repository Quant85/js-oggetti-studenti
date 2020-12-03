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


class StudenteX {
  constructor(nome, cognome, età) {
    this.firstName = nome;
    this.surname = cognome;
    this.age = età;
  }
}


var studenti = [
  new StudenteX("Piero","Calmati",38),
  new StudenteX("Alterio","Prossimo",48),
  new StudenteX("Carlo","Stanco",39)
];

btnAdd = document.getElementById("bt_add");
btnRemoveLast = document.getElementById("bt_remove");

btnAdd.addEventListener("click", function () {

var nomeInput = document.getElementById("nome").value;
console.log(nomeInput);
var nomeInputCapitalize = capitalize(nomeInput);
console.log(nomeInputCapitalize);

var cognomeInput = document.getElementById("cognome").value;
console.log(cognomeInput);
var cognomeInputCapitalize = capitalize(cognomeInput);
console.log(cognomeInputCapitalize);

var etàInput = parseInt(document.getElementById("età").value);
console.log(etàInput);
if (nomeInput===""  || cognomeInput==="" || isNaN(etàInput)) {
  alert("I dati inseriti non sono corretti");
} else {
  studenti.push(new StudenteX(nomeInputCapitalize,cognomeInputCapitalize,etàInput));
  }
console.log(studenti);
});

btnRemoveLast.addEventListener("click", function () {
studenti.pop(new StudenteX());
console.log(studenti);

});










