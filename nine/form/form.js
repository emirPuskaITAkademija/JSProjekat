function onSubmitPodataka(){
    let usernameInput = document.forms["nasaForma"]["username"];
    let usernameInputValue = usernameInput.value;
    if(usernameInputValue == ""){
        alert("Unesi bona/bolan username");
        return false;
    }
    let passwordInput = document.forms["nasaForma"]["lozinka"];
    let passwordInputValue = passwordInput.value;
    if(passwordInputValue == ""){
        alert("Unesite i lozinku");
        return false;
    }
    return true;
}