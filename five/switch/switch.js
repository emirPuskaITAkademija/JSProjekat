function check() {
    let dayInWeek = prompt("Unesi ime dana u sedmici na Engleskom jeziku");
    let convertedEntry = dayInWeek.toLowerCase();
    if (convertedEntry === "monday") {
        alert("Prevod: PONEDELJAK");
    } else if (convertedEntry === "tuesday") {
        alert("Prevod: UTORAK");
    } else if (convertedEntry === "wednesday") {
        alert("Prevod: SRIJEDA");
    } else if (convertedEntry === "thursday") {
        alert("Prevod: ČETVRTAK");
    } else if (convertedEntry === "friday") {
        alert("Prevod: PETAK");
    } else if (convertedEntry === "saturday") {
        alert("Prevod: SUBOTA");
    } else if (convertedEntry === "sunday") {
        alert("Prevod: NEDELJA");
    } else {
        alert("Neispravan unos dana u sedmici na ENgleskom jeziku");
    }
}
/**
 * Treba da napravite program koji će uvijek prikazivati TRENUTNO ime dana 
 * u sedmici na NJEMAČKOM jeziku 
 */
function switchFunction() {
    const currentDate = new Date();//trenutni datum
    const currentDay = currentDate.getDay();//trenutni dan u sedmici 0 -- > 6
    switch (currentDay) {
        case 0:
            alert('Sonntag');
            break;
        case 1:
            alert('Montag');
            break;
        case 2:
            alert('Dienstag');
            break;
        case 3:
            alert('Mittwoch');
            break;
        case 4:
            alert('Donnerstag');
            break;
        case 5:
            //alert('Freitag');
            //document.write("FREITAG");
            let h3Objekat = document.getElementById("dayInWeek");
            h3Objekat.innerHTML="FREITAG";
            h3Objekat.style.color = "RED";
            break;
        case 6:
            alert('Samstag');
            break;
        default:
            break;
    }
}