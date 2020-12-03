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
/**
 * Questa funzione mi permette di resettare i tag input presenti nel mio form
 * 
 */
function resetForm() {
document.getElementById("nome").value = "";
document.getElementById("cognome").value = "";
document.getElementById("età").value = "";
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
  //console.log(key);
  //console.log(studente[key]);
  var headerTable = `<th>${studente.key}</th>`;
  document.getElementById('nome_proprietà').insertAdjacentHTML('beforeend', `<th>${capitalize(key)}</th>` );
  document.getElementById('valore_proprietà').insertAdjacentHTML('beforeend', `<td>${studente[key]}</td>` );
}
//--- Vedere variabili dinamiche - - - possibile alternativa
//definisco una classe -StudentX che mi permette di poterla richiamare invece di rispecificare ogni volta gli elementi compilati l'oggetto - un po come una funzione 
class StudenteX {
  constructor(nome, cognome, età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
  }
}
//array di oggetti contenenti le info designate
var studenti = [
  new StudenteX("Alterio","Calmati",38),
  new StudenteX("Primo","Prossimo",48),
  new StudenteX("Gioia","Stanco",39)
];
console.log(studenti);

//Genero la tabella con i valori contenuti nell'array studenti, contenente gli oggetti di classe studnteX (istanze?)
for (var i = 0; i < studenti.length; i++) {
  var studenteIesimo = studenti[i];
  //console.log(studenteIesimo);
  var nomeProprietàOggettoStudenteXInArrayStudenti= Object.keys(studenteIesimo)[i];
  //console.log(nomeProprietàOggettoStudenteXInArrayStudenti);
  
  var headerStudentsTable = `<th>${capitalize(nomeProprietàOggettoStudenteXInArrayStudenti)}</th>`;
  var rowStudentsTable = `<tr id="riga${i+1}"></tr>`;
  var tdId= `riga${i+1}`;

  //console.log(headerStudentsTable);
  //console.log(rowStudentsTable);

  document.getElementById('property_name').insertAdjacentHTML('beforeend',headerStudentsTable );
  document.getElementById('tbody_studens').insertAdjacentHTML('beforeend',rowStudentsTable );


  for (var key in studenteIesimo) {
    var valoreProprietàOggettoStudenteX = studenteIesimo[key];
    var outputValoreStudenteX= `<td>${valoreProprietàOggettoStudenteX}</td>`;
    //console.log(valoreProprietàOggettoStudenteX);
    //console.log(outputValoreStudenteX);
    document.getElementById(tdId).insertAdjacentHTML('beforeend',outputValoreStudenteX);
  }  
}

btnAdd = document.getElementById("bt_add");
btnRemoveLast = document.getElementById("bt_remove");

//attivo l'immissione dal submit - button
btnAdd.addEventListener("click", function () {

var nomeInput = document.getElementById("nome").value;
console.log(nomeInput);
//Trasformo l'iniziale in maiuscola prima di passarla all'array indistintamente da ciò che l'utente inserisce
var nomeInputCapitalize = capitalize(nomeInput);
//console.log(nomeInputCapitalize);

var cognomeInput = document.getElementById("cognome").value;
//console.log(cognomeInput);
//Trasformo l'iniziale in maiuscola prima di passarla all'array indistintamente da ciò che l'utente inserisce
var cognomeInputCapitalize = capitalize(cognomeInput);
console.log(cognomeInputCapitalize);

var etàInput = parseInt(document.getElementById("età").value);
//console.log(etàInput);
//Non accetto campi vuoiti o non numeri - in caso contrario avviso l'utente mediante alert
  console.log(studenti.length);
if (nomeInput===""  || cognomeInput==="" || isNaN(etàInput)) {
  alert("I dati inseriti non sono corretti");
} else {
  studenti.push(new StudenteX(nomeInputCapitalize,cognomeInputCapitalize,etàInput));
  //Genero la tabella con i valori contenuti nell'array studenti, contenente gli oggetti di classe studnteX (istanze?)
  var rowStudentsTable = `<tr id="riga${studenti.length}"></tr>`;
  //console.log(rowStudentsTable);
  document.getElementById('tbody_studens').insertAdjacentHTML('beforeend',rowStudentsTable );

  for (var j = studenti.length-1; j <= studenti.length; j++) {
    console.log(j);
    var studenteJeiesimo = studenti[j];
    //console.log(studenteJeiesimo);
    for (var k in studenteJeiesimo) {
      console.log(k);
      var tdIdPlus= `riga${studenti.length}`;
      console.log(tdIdPlus);
      var proprietàPlus = studenteJeiesimo[k];
      var outputValorePlus= `<td>${proprietàPlus}</td>`;
      console.log(proprietàPlus);
      console.log(outputValorePlus);
      document.getElementById(tdIdPlus).insertAdjacentHTML('beforeend',outputValorePlus);
    }  
  }
  
}

//funzione reset da migliorare e generalizzare - guardare metodo .reset()
resetForm();
console.log(studenti);
});

//permetto di eliminare l'ultimo elemento inserito - con un campo chiave identificativo potrei permettere l'eliminazione selezionata e/o cercata search
btnRemoveLast.addEventListener("click", function () {
studenti.pop(new StudenteX());
console.log(studenti);
});







