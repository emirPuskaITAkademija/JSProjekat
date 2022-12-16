let korisnickiUnosGodina = prompt('Unesi broj svojih godina');
let korisnikiUnosNovca = prompt('Unesi koliko imaš love');

let age = parseInt(korisnickiUnosGodina); // parseInt 
let novac = parseFloat(korisnikiUnosNovca);// parseFloat

console.log(age);
console.log(novac);
//logički AND &&
//logičko OR ILI ||
let message = age<18 || novac<10 ? 'Nemaš love ..': 'Imaš love..';
alert(message);
/*if(age < 18 || novac<10){
    alert('Nemaš love za narudžbu odrasle osobe..');
}else{
    alert('Imaš lovu i naručuj sve što vole mladi i stari ali PUNOLJETNI...');
}*/