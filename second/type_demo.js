var broj = 23;
console.log(typeof broj)
broj = 'Adnan';
console.log(typeof broj)
broj = null;
console.log(typeof broj);

let person = {
    name: 'Arnaldo', // key:value
    surname: 'Arnaldović', //key:value
    age : 13 //key:value
};  
console.log(person);

//age
let personAge = person.age;
console.log("Age: " + person.age);
console.log("Ime: " + person.name);

let prezime = person['surname'];
console.log(prezime);


