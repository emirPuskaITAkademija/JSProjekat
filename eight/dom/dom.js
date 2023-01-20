function onBijeloDugmeHandler(){
    let elementiIsteKlase = document.getElementsByClassName("stabilo");
    for(let i = 0; i<elementiIsteKlase.length; i++){
        let element = elementiIsteKlase[i];
        element.style="font-size:16px;color:tomato;";
    }
}

function izmijeniParagrafe(){
    let paragrafiIsteKlase = document.querySelectorAll("p.stabilo");
    for(let i=0; i<paragrafiIsteKlase.length; i++){
        let paragraf = paragrafiIsteKlase[i];
        paragraf.style="font-size:16px";
    }
}