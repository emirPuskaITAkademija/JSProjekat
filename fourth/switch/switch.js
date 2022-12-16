let vrijemeTrenutno = new Date();
console.log(vrijemeTrenutno.getDay());
switch (vrijemeTrenutno.getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
}



//switch-case-break
function switchFunction() {
    let x = prompt("Unesi vrijednost");//x tipa String
    //x = parseInt(x); // x postaje tipa number
    switch (x) {
        case "10":
            console.log("Korisnik unio ... 10");
            break;
        case "5":
            console.log("Korisnik unio 5..");
            break;
        case "100":
            console.log("Korisnik unio 100");
            break;
        default:
            console.log("Korisnik nije unio ni 10 ni 5 ni 100");
            break;
    }
}