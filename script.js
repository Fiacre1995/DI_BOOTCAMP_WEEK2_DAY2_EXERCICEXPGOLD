/*Exercice 1*/

let langue = prompt('Quel langue parler vous ?');
langue = langue.toLowerCase();
console.log(langue);
switch (langue) {
  case 'francais':
    console.log('Bonjour');
    break;
  case 'anglais':
    console.log('Hello');
    break;
  case 'hebreu':
    console.log('Shallom');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('01110011 01101111 01110010 01110010 01111001');
}


/*EXERCICE 2*/


let Note = prompt('Veuillez saisir votre note ');
if( Note > 90){
    console.log("A");
}else if(Note >=80 && Note <=90){
    console.log("B");
}else if(Note >=70 && Note <80){
    console.log("C");
}else if(Note < 70){
    console.log("D");
}else{
    console.log();
}


/*Exercice 3*/

let chaine = prompt("Veuillez saisir un verbe svp");
chaineLenght = chaine.length;
SousLenght = chaineLenght-3;
SousChaine = chaine.substring(SousLenght, chaineLenght); 
if(SousChaine !== "ing" && chaineLenght > 3 ){
    chaine=chaine+"ing";
    console.log(chaine);
}else if(SousChaine === "ing" && chaineLenght > 3) {
    chaine = chaine+"ly"
    console.log(chaine);
}else{
    console.log(chaine);
}