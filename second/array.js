let person = {
    name: 'Adnan',
    surname: 'Adnanović',
    age: 29
}
console.log(person.name);
console.log(person['age']);

//polja koja nisu imenovana nego su indeksirana
//prvo polje u nizu je indeksirano sa 0

let clubs = ['Sarajevo', 'Željo', 'Čelik', 'Velež', 'Borac', 23, 123];
clubs[7] = 'Sloboda';
console.log(clubs);
console.log(typeof clubs);
console.log(clubs.length);

