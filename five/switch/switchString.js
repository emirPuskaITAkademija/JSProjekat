function showContinentNameOnFrench() {
    let continentName = prompt("Unesite ime kontinenta: ");
    let continentNameCapsLock = continentName.toUpperCase();
    switch (continentNameCapsLock) {
        case "AFRIKA":
            alert("Afrique");
            break;
        case `EVROPA`:
            alert("L'Europe");
            break;
        case 'AUSTRALIJA':
            alert("Australie");
            break;
        case "JUŽNA AMERIKA":
            alert('Amérique du Sud');
            break;
        case 'SJEVERNA AMERIKA':
            alert("Amérique du Nord");
            break;
        case "AZIJA":
            alert("Asie");
            break;
        case "ANTARTIK":
            alert("Antarctique");
            break;
        default:
            alert("Prvo nauči imena kontinenata na BOSANSKOm pa tek onda uči i FRENCH");
    }
}