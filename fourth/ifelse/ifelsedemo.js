//4 načina da kreirate varijablu u JS
//1. var
//2. let -> 
//3. 
//4. const


//Sta zelimo postici pisanje funkcije ?
// 
function ocijeniStudenta() {
    //prompt("tekst") -> će omogućiti prikaz prozora koji smo upravo vidjeli
    let brojPoena = prompt("Unesi broj poena:");
    let ocjena;
    if (brojPoena >= 90) {
        ocjena = 'A';
    } else if (brojPoena >= 80) {
        ocjena = 'B';
    }else if(brojPoena>=70){
        ocjena = 'C';
    }else if(brojPoena>=60){
        ocjena = 'D';
    }else{
        ocjena = 'F';
    }
    //za razliku od prompt funkcije ja ne nudim polje za unos
    //ja samo prikazujem tekst 
    alert("Ocjena na ispitu = " + ocjena);
}