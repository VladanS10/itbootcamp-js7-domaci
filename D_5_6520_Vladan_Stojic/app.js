//Zadatak 1
let p = 2600;
let m = 2700;
let k = 500;

let cenaDzempera = (p + m - k) / 2;
console.log(cenaDzempera + " cena dzempera");

let kusurPera = p - cenaDzempera;
let kusurMika = m - cenaDzempera;
console.log(`Pera treba da dobije kusur ${kusurPera} dinara`);
console.log(`Mika treba da dobije kusur ${kusurMika} dinara`);


//Zadatak 2
let n = 100;
let dan1 = 25;
let dan2 = dan1 + 2;
let ukupno = n - (dan1 + dan2);


if(dan1 + dan2 > n / 2) {
    console.log("Ostalo je da se procita još manje od polovine knjige");
}else {
    console.log(`Ostalo je da procita ${ukupno}`);
};

//Zadatak 3

let u = 4500;
let kal = 4.1868;
let dataVrednost = 2000;
let ukupnoKal = u / kal;
if(ukupnoKal < dataVrednost) {
    console.log("Potrebno je povećati dnevni unos");
}else {
    console.log("​Nije potrebno povećati dnevni unos");
}


