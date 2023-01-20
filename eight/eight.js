function onClickHandler(){
    console.log(`mogu reci da se ovo ne vidi nigdje osim u konzoli....`);
    let bijeloDugme = document.getElementById("dugmic");
    bijeloDugme.innerHTML = "Kliknuto DUGME";

    let elements = document.getElementsByTagName("p");
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
        element.style="font-size:25px;color:tomato;";
    }
}