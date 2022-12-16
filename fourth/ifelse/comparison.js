function nasaFunkcija(){
    console.log("Neko klikno na teee.");
    //document.write("TOTALNO NOVI SADRZAJ u DOKUMENT HTML ");
    let input = document.getElementById('starost');
    let valueOfInput = input.value;
    console.log("STAROST = " + valueOfInput);
    //isNaN(vrijednsot) -> true ili false
    if(isNaN(valueOfInput)){
        alert("Hej unesi starost kao broj a ne kao tekst...");
    }else{
        let message = valueOfInput<18?"Premlad si da glasaš..":"Možeš glasati...";
        alert(message);
    }
}

let numbers = [23, 23, 45465, "Adis", "Ibrahim"];



const club = {
    type:"Fudbalski",
    name:"Čelik"
};
let korisnickiOdabir = "type";
console.log(club?.age);//throw error