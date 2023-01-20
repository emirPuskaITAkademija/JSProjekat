//16px i 24px
function turnOnOff(){
    let dugme = document.getElementById("dugmic");
    let prethodniTextDugme = dugme.innerHTML;
    dugme.innerHTML = prethodniTextDugme=="ON" ? "OFF":"ON";
    /*if(prethodniTextDugme=="ON"){// "ON"
        dugme.innerHTML = "OFF"; // "OFF"
    }else{//"OFF"
        dugme.innerHTML = "ON";//"ON"
    }*/
    let paragrafi = document.getElementsByTagName("p");
    for(let i = 0; i <paragrafi.length; i++){
        let paragraf = paragrafi[i];
        let fontSize = prethodniTextDugme == "ON"?"24px":"16px";
        paragraf.style=`font-size:${fontSize}`;
       /* if(prethodniTextDugme == "ON"){
            paragraf.style="font-size:24px";
        }else{
            paragraf.style="font-size:16px";
        }*/
    }
}