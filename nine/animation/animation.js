function startujAnimaciju(){
    const kvadraticMaliDiv = document.getElementById("kvadraticMali");
    let iznosPomjeraja = 0;
    let intervalPomjeraja = setInterval(pomjeraj, 5); 
    function pomjeraj(){
        if(iznosPomjeraja == 125){
            iznosPomjeraja = 0;
            clearInterval(intervalPomjeraja);
        }else{
            iznosPomjeraja++;
            //kvadraticMaliDiv.style.top = iznosPomjeraja+"px";
            kvadraticMaliDiv.style.left = iznosPomjeraja+"px";
        }
    }
}

function vratiSe(){
    const kvadraticMaliDiv = document.getElementById("kvadraticMali");
    let iznosPomjerajaURikverc = 125;
    let intervalRikverca = setInterval(rikverc, 5); 
    function rikverc(){
        if(iznosPomjerajaURikverc == 0){
            iznosPomjerajaURikverc = 0;
            clearInterval(intervalRikverca);
        }else{
            iznosPomjerajaURikverc--;
            //kvadraticMaliDiv.style.top = iznosPomjerajaURikverc+"px";
            kvadraticMaliDiv.style.left = iznosPomjerajaURikverc+"px";
        }
    }
}