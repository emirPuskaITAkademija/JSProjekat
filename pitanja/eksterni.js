function addFruit(){
    console.log("Pozvana je funkcija addFruit()");
    let suma = sum(23, 34);
    console.log("Suma 23 i 34 = " + suma);
    let unosKorisnika = prompt("Unesi vocku");
    console.log("Unesena vocka je : " + unosKorisnika);
    alert("Unesena voćka je: " + unosKorisnika);
    let suma2 = sum("2", 34);//String 2, number 34 -> 234
    console.log("SUMA2: " + suma2);
    let subtraction2 = subtract("2", 34);//String 2, number 34-> 2-34 234
    console.log("RAZLIKA: " + subtraction2);
}

function subtract(x1, x2){
    let subtraction = x1-x2;
    return subtraction;
}


function sum(x1, x2){
    let suma = x1 + x2;
    return suma;
}