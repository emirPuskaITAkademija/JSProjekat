function procesirajTekst() {
  console.log("Poziva se procesirajTekst()...");
  let uneseniTekst = prompt("Unesite vaše omiljene voćke");
  let modifikovaniTekst = uneseniTekst.replaceAll("Banana", "Ananas");
  //Ananas Jabuka Šljiva Ananas banana
  console.log("Modifikovani tekst: " + modifikovaniTekst);
  modifikovaniTekst = modifikovaniTekst.replaceAll("banana", "Ananas");
  console.log("Modifikovani tekst 2: " + modifikovaniTekst);
  alert("Izvorni tekst: " + uneseniTekst);
  alert("Modifikovani tekst: " + modifikovaniTekst.toUpperCase());
}

function pozdravnaFunkcija() {
  let ime = prompt("Unesite ime");
  let prezime = prompt("Unesite prezime");
  let punoIme = ime.concat(" ", prezime);
  let punoIme2 = ime + " " + prezime;
  alert(punoIme);
}
/**
 * trim() -> s početka i s kraja
 * trimStart()
 * trimEnd()
 */
function izbaciSpacing() {
  let text = prompt("Unesite tekst");
  let modifikovanTekstBezSpacinga = text.trim();
  alert(modifikovanTekstBezSpacinga);
}
/**
 * padStart()
 * padEnd()
 */
function dodajPadding() {
  let text = prompt("Unesite tekst");
  let paddedText = text.padEnd(15, "X");
  alert(paddedText);
}

let numberVar = 23;
let numberVarText = numberVar.toString();
let paddedVar = numberVarText.padEnd(6, "x");
console.log(paddedVar);

function pretrazi() {
  let text = prompt("Unesi tekst koji zelis testirati");
  let position = text.indexOf("Banana");
  let message =
    position == -1
      ? "Bana nije locirana"
      : "Banana je locirana na poziciji " + position;

  alert(message);
}

/**
 * let text = ...
 * let condition =  text.includes("Banana"); // true / false
 * 
 * startsWith()
 * endsWith()
 */
function pretraziIgnoreCase() {
  let text = prompt("Unesi tekst");
  let noviText = text.toLowerCase();
  let startsWith = noviText.startsWith("banana");
  let message = startsWith ? "Tekst počinje s banana": "Tekst ne počinje s banana";
  alert(message);
  /*text = text.toLowerCase();
  console.log("To lower case of text: " + text);
  if (text.includes("banana")) {
    let indexBanane = text.indexOf("banana");
    alert("Banana je locirana na poziciji: " + indexBanane);
  }else{
    alert("Banane nema..");
  }*/
}

/**
 * Interpolaciji neki vrijednosti varijabli u string varijablu
 */

function greetings(){
    let ime = prompt("Ime unestie");
    let prezime = prompt("Prezime unesite");
    let pozdravnaPoruka = `Dobro veče ${ime} ${prezime}`;
    alert(pozdravnaPoruka);
}

function izracunajPdvArtikla(){
    
}