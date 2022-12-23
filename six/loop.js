// 6 omiljenih vocki DRY Don't Repeat Yourself
function enterFavouriteFruits() {
  const fruits = [];
  let vocka1 = prompt("Unesi omiljenu voćku");
  fruits[0] = vocka1;
  let vocka2 = prompt("Unesi omiljenu voćku");
  fruits[1] = vocka2;
  let vocka3 = prompt("Unesi omiljenu voćku");
  fruits[2] = vocka3;
  let vocka4 = prompt("Unesi omiljenu voćku");
  fruits[3] = vocka4;
  let vocka5 = prompt("Unesi omiljenu voćku");
  fruits[4] = vocka5;
  let vocka6 = prompt("Unesi omiljenu voćku");
  fruits[5] = vocka6;
  console.log(fruits);
  let orderedList = "<ol>";
  orderedList = orderedList + "<li>" + vocka1 + "</li>";
  orderedList = orderedList + "<li>" + vocka2 + "</li>";
  orderedList = orderedList + "<li>" + vocka3 + "</li>";
  orderedList = orderedList + "<li>" + vocka4 + "</li>";
  orderedList = orderedList + "<li>" + vocka5 + "</li>";
  orderedList = orderedList + "<li>" + vocka6 + "</li>";
  orderedList = orderedList + "</ol>";
  console.log(orderedList);
  let fruitParagraph = document.getElementById("fruitParagraph");
  fruitParagraph.innerHTML = orderedList;
}

function enterFruits() {
  let brojOmiljenihVockiText = prompt("Unesi broj omiljenih voćki");
  let brojOmiljenihVocki = parseInt(brojOmiljenihVockiText);

  const fruits = [];
  // i = 0 ; 0<4, i = 1        ; 1<4; i=2       ; 2<4; i=3    ;3<4; i=4    ; 4<4
  for (let i = 0; i < brojOmiljenihVocki; i++) {
    let vocka = prompt("Unesi omiljeno voće:");
    fruits[i] = vocka; //fruits[0] = Banana; fruits[1] = Jabuka; fruits[2] = Šljiva; fruits[3] = Kruška
  }
  console.log(fruits.length); // fruits.length -> 4

  let htmlSadrzaj = "<ul>";
  //j = 0;   0<4 ; j=1  ->   ; 1<4; j=2 -> ;2<4; j=3 -> ;3<4;j=4 -> ; 4<4
  for (let j = 0; j < fruits.length; j++) {
    htmlSadrzaj = htmlSadrzaj + "<li>" + fruits[j] + "</li>";
    //fruits[0] -> Banana
    //fruits[1] -> Jabuka
    //fruits[2] -> Šljiva
    //fruits[3] -> Kruška
  }
  htmlSadrzaj = htmlSadrzaj + "</ul>";
  let fruitParagraph = document.getElementById("fruitParagraph");
  fruitParagraph.innerHTML = htmlSadrzaj;
}

function pritisniPeticuPocniIgricu() {
  for (; true; ) {
    let unosKorisnika = prompt("Unesi peticu i počni igricu");
  }
}

function igrica() {
  for (; true; ) {
    const unosBroja = prompt("Unesite broj 5 i pocnite igricu");
    const unosBrojaBroj = parseInt(unosBroja);
    if (unosBrojaBroj === 5) {
      alert("Unljeli ste peticu.");
      break;
    } else {
      alert("Niste unljeli peticu i ne mozete poceti igricu,unesite peticu");
    }
  }
}

//zadatak: JS objekat person...name,surname,age
function test() {
  let number = 23;
  const numbers = ["dmskd", 23];
  const person = {
    name: "Ibrahim",
    surname: "Memišagić",
    age: 19,
  };
  //person.name
  //person["name"]
  let textInfo = "";
  for (let polje in person) {
    console.log(polje);
    textInfo = textInfo + " - " + person[polje];
  }
  alert("Person INFO: " + textInfo);
}

const vegetables = ["Kelj", "Španać", "Krastavac", "Lubenica"];
for (let vegetable in vegetables) {
  console.log(vegetables[vegetable]);
}

const cars = ["Zastava", "Audi", "VW", "Škoda", "BMW"];
cars.forEach(processCarValue);

//3 parametra da bi je mogli kombinovati sa forEach
function processCar(value, index, array) {
  console.log(value + " at index " + index);
}

function processCarValue(value) {
  console.log(value);
}

const months = ["Mart", "Juli", "August", "Septembar", "Januar"];
for (let month of months) {
  console.log(month);
}

const ime = "Ibrahim";
for (let slovo of ime) {
  console.log(slovo);
}

//0-9   -> ali samo parne
let number = 0;
while (number < 10) {
  if (number % 2 != 0) {
    console.log(number);
  }
  number++;
}


//ZADACA
