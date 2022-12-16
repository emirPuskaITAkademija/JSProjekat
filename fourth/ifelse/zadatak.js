/*
06-12 -> "Dobro jutro"
18-06 -> "Dobro veče"
12-18 -> "Dobar dan"
*/
function pozdraviKorisnika() {
    let unos = prompt("Unesi vrijeme u satim od 0-24 h:");
    let poruka;
    if ((unos >= 18 && unos <= 24)  ||(unos >= 0 && unos < 6)) {
        poruka = "Dobro veče";
    } else if (unos >= 12 && unos < 18) {
        poruka = "Dobar dan";
    } else {
        poruka = "Dobro jutro";
    }
    alert(poruka);
}