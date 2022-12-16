let firstName = 'Adis ';
let lastName = 'Gluhović';
let fullName = firstName + lastName;
console.log(fullName);
let number = 10;
let text = fullName + number;
console.log(text);



let broj = 10;
let comparisonResult = broj == 10;
console.log(comparisonResult);
let tekst = '10';
comparisonResult = broj == tekst; // poredđenje po vrijednosti
console.log(comparisonResult);
comparisonResult = broj === tekst; // poređenje po vrijednosti i tipu
console.log(comparisonResult);

let var1 = 10;
comparisonResult = var1 != '10';
console.log(comparisonResult);
comparisonResult = var1 !== '10';
console.log(comparisonResult);

comparisonResult = number >= var1;
console.log(comparisonResult);
if (number > var1) {
    console.log("number ima veću vrijednost od var1");
}
if(number >= var1){
    console.log("number ima veću ili bar jednaku vrijednost kao i var1");
}






