function onBrojevniUnos(){
    let brojevniUnosInput = document.getElementById("brojevniUnos")
    let brojevniUnos = brojevniUnosInput.value;
    let message = "";
    let vrijednostBoje = "red";
    if(brojevniUnos == ""){
        message = "Niste unijeli ništa";
    }
    else if(isNaN(brojevniUnos)){
        message = `Niste unijeli broj nego ste unijeli ${brojevniUnos}`;
    }else if(brojevniUnos<1 || brojevniUnos >23){
        message = "Unijeli ste broj van opsega 1-23";
    }else{
        message = "Unijeli ste ispravan broj";
        vrijednostBoje = "green";
    }
    let paragraf = document.getElementById("messageParagraf");
    paragraf.style.color=vrijednostBoje;
    paragraf.innerHTML = message;
}