function swapText(){
    const h1Element = document.getElementById("prviElement");
    const pElement = document.getElementById("drugiElement");
    let temp = h1Element.innerHTML;
    h1Element.innerHTML = pElement.innerHTML;
    pElement.innerHTML=temp;
}