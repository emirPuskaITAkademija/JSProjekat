let korisnickiUnos = prompt('Unesite broj godina');
let korisnickiUnos2 = prompt('Kolko si spreman da daš za alkoholno piće');
let age = parseInt(korisnickiUnos);
let iznosNovca = parseFloat(korisnickiUnos2);
//Logičke operatore AND 
if (age >= 18 && iznosNovca >= 10) {
    alert('Možeš piti alkohol ali znaj da alkohol uništava ćelije u mozgu koje se ne regeneriraju..');
} else {
    let message = 'Premlad si da piješ alkoholna pića ili nemaš love...';
    console.log(message);
    alert(message);
}