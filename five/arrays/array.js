
let number = 23;
console.log(number);
number = 24;
console.log(number);
/**
 * 1. način na koji možemo kreirati niz
 */
const numbers = [23, 24, "Jordan", "Jokić"];
numbers[4] = "Kukoč";
numbers[5] = "Denis";
console.log(numbers);
/**
 * 2. način
 */
const players = [];
players[0] = "Mbappe";
players[1] = "Messi";
players[2] = "Modrić";
players[3] = "Hakimi";
console.log(players);

/**
 * new -> KLJUČNA
 * 
 */
const nbaPlayers = new Array("Jordan", "Jokić", 23, 15, "Kukoč", "Dražen Petrović");
console.log(nbaPlayers[5]);

// NIZ je po tipu OBJEKAT -> polja niza su INDEKSIRANA
// JS OBJEKTA -> polja objekta IMENOVANA
const person = {
    firstName: "Dražen",
    lastName: "Petrović",
    age: 25,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[0]);

function start() {
    const fruitItems = [];
    // let i = 0     i<=4    i++
    let i = 0;
    while(i<=4){
        alert("Viruss....");
        i++;
    }
    fruitItems[0] = prompt("Unesite neko voće");
    fruitItems[1] = prompt("Unesite neko voće");
    fruitItems[2] = prompt("Unesite neko voće");
    fruitItems[3] = prompt("Unesite neko voće");
    fruitItems[4] = prompt("Unesite neko voće");
    console.log(fruitItems);
    let htmlText = "<ol>";
    htmlText = htmlText + "<li>" + fruitItems[0] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[1] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[2] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[3] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[4] + "</li>";
    htmlText = htmlText + "</ol>";
    document.getElementById("voce").innerHTML = htmlText;
}

let html = "<ol>";
html = html +"<li> BANANA"+"</li>";
html = html +" </ol>";
console.log(html);