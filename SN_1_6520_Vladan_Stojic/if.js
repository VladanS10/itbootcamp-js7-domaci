// 1. Zadatak
// Naći i ispisati najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.

let a = 15;
let b = 9;
let c = 21;


if(a > b && a > c){
    document.body.innerHTML = `<p style="color: blue; font-size: 35px">Broj ${a} je najveci od ponudjenih</p>`;
}
else if(a < b && b > c) {
    document.body.innerHTML = `<p style="color: blue; font-size: 35px">Broj ${b} je najveci od ponudjenih</p>`;
}
else{
    document.body.innerHTML = `<p style="color: blue; font-size: 35px">Broj ${c} je najveci od ponudjenih</p>`;
}



// // 2. Zadatak
// // Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15
// // stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = 55;

if(temp < -15) {
    document.body.innerHTML += `<p style="font-size: 50px; color:blue">Ekstremno niska temperatura</p>`;
}
else if(temp > 40) {
    document.body.innerHTML += `<p style="color:red; font-size: 50px">Ekstremno visoka temperatura</p>`;
}
else {
    document.body.innerHTML += `<p style="color:green; font-size: 25px">Temperatura je normalna</p>`;
}




// // 3. Zadatak
// // Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi
// // jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.


let izabranaGodina = 2024;
if(izabranaGodina % 4 == 0){
    if(izabranaGodina % 100 !=0 || izabranaGodina % 400 == 0)
    console.log("Godina je prestupna");
    
}else{
    console.log("Godina nije prestupna");
}





// // 4. Zadatak
// // Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do
// // 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let vreme = new Date();
let dani = vreme.getDay();
let sati = vreme.getHours();
// console.log(dani);
// console.log(sati);

const pocetakRadniDan = 9;
const krajRadniDan = 20;
const pocetakVikend = 10;
const krajVikend = 18;

if(dani == 0 || dani == 6){
    if(sati >= pocetakVikend && sati < krajVikend){
        console.log(`Trenutno je vikend i butik radi`);
    }
    else {
        console.log(`Trenutno je vikend i butik ne radi`);
    }
}
if(dani >=1 && dani < 6){
    if(sati >= pocetakRadniDan && sati < krajRadniDan) {
        console.log(`Trenutno je radni dan i butik radi`);
    }
    else{
        console.log(`Trenutno je radni dan i butik ne radi`);
    }
}





// // 5. Zadatak
// // Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg
// // meseca. Rezultat ispisati na ekranu i u konzoli.


// // Datum i vreme sam preuzeo iz prethodnog zadatka

// // let datum = vreme.ge
let mesec = vreme.getMonth() + 1;
console.log(mesec);
let datum = vreme.getDate();
console.log(datum);


let danUMesecu = new Date(vreme.getFullYear(), vreme.getMonth() + 1, 0).getDate();

let preostaloDana = danUMesecu - datum;

console.log(`Preostalo je jos ${preostaloDana} do kraja meseca`);






// // 6. Zadatak
// // Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo
// // meru da za svakog čoveka mora biti obezbeđeno 3𝑚 površine lokala. Za 2
// // posmatrani kafić su dati podaci da ima 𝑣 𝑚 i da je u njemu trenutno gostiju. 2
// // 𝑛
// // Brojeve 𝑣 i 𝑛 određujete sami.
// // Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema
// // unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne
// // pridržava propisane mere.
// // Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal
// // da bi mera bila zadovoljena.

let n = 10;
let v = 30;
let potrebnoProstora = 3;
let maxOsoba = v / potrebnoProstora;
if(maxOsoba >= n){
    console.log(`Mere se postuju`);
    document.body.innerHTML += `<p style="color:green">Da, mere se postuju</p>`;
}else{
    console.log(`Mere se ne postuju`);
    document.body.innerHTML += `<p style="color:red">Ne, mere se ne postuju, ${n - maxOsoba} ljudi treba da napusti prostoriju</p>`;
}






// 7. Zadatak
// Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se
// njihove smene preklapaju.
// Ulaz (vrednosti koje samostalno dodeljujete promenljivama) :
// ● Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i
// pocMinLek1)
// ● Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i
// krajMinLek1)
// ● Početak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i
// pocMinLek2)
// ● Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i
// krajMinLek1)
// Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
// ● Početak radnog vremena prvog lekara (izraženo u satima i minutima)
// ● Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
// ● Početak radnog vremena drugog lekara (izraženo u satima i minutima)
// ● Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
// ● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u
// satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva
// lekara, na ekranu ispisati da nema preklapanja.

let pocDr1 =  9 * 60 + 50;
let krajDr1 = 18 * 60 + 4;

let pocDr2 = 9 * 60 + 4;
let krajDr2 = 22 * 60 + 4;
let preklapanje;

if(krajDr1 < pocDr2 || krajDr2 < pocDr1){
    preklapanje = 0;
    console.log("Slucaj 1");
} 
    else if (pocDr1 == pocDr2 && krajDr1 == krajDr2){
        preklapanje = (krajDr1 - pocDr1)
        console.log("Slucaj 2");
    }
    else if (pocDr1 == pocDr2 && krajDr1 < krajDr2){
        preklapanje = (krajDr1 - pocDr1);
        console.log("Slucaj 3");
    }
    else if (pocDr1 == pocDr2 && krajDr1 > krajDr2){
        preklapanje = (krajDr2 - pocDr2);
        console.log("Slucaj 4");
    }
    else if (pocDr1 < pocDr2 && krajDr1 == krajDr2) {
        preklapanje = (krajDr2 - pocDr2);
        console.log("Slucaj 5");
    }
    else if (pocDr1 > pocDr2 && krajDr1 == krajDr2){
        preklapanje = (krajDr1 - pocDr1);
        console.log("Slucaj 6");
    }
    else if (pocDr1 < pocDr2 && krajDr1 < krajDr2){
        preklapanje = (krajDr1 - pocDr2);
        console.log("Slucaj 7");
    }
    else if (pocDr1 > pocDr2 && krajDr1 > krajDr2){
        preklapanje = (krajDr2 - pocDr1)
        console.log("Slucaj 8");
    }
    else if(pocDr1 < pocDr2 && krajDr1 > krajDr2){
        preklapanje = (krajDr2 - pocDr2);
        console.log("Slucaj 9");
    }
    else if(pocDr1 > pocDr2 && krajDr1 < krajDr2){
        preklapanje = (krajDr1 - pocDr1);
        console.log("Slucaj 10");
    }
    else {
        preklapanje = 0
    }

    let minuta = preklapanje % 60;
    let houres = Math.trunc(preklapanje / 60);
    if (preklapanje == 0) {
        console.log("Nema preklapanja.");
        document.body.innerHTML +=`<p style="color:red">Nema preklapanja.</p>`;
    }
    else {
        console.log(`Preklapaju je se ${houres} sati i ${minuta} minuta.`);
    }
    let pocetakPrvogSata = Math.trunc(pocDr1 / 60);
    let pocetakPrvogMin = pocDr1 % 60;
    
    document.body.innerHTML += `<p style="color:green; font-size:30px" >Pocetak prvog doktora je: ${Math.trunc(pocDr1 / 60)}h i ${pocDr1 % 60}min</p>`
    document.body.innerHTML += `<p style="color:red; font-size:30px" >Kraj prvog doktora je: ${Math.trunc(krajDr1 / 60)}h i ${krajDr1 % 60}min</p>`
    
    document.body.innerHTML += `<p style="color:green; font-size:30px" >Pocetak drugog doktora je: ${Math.trunc(pocDr2 / 60)}h i ${pocDr2 % 60}min</p>`
    document.body.innerHTML += `<p style="color:red; font-size:30px" >Kraj drugog doktora je: ${Math.trunc(krajDr2 / 60)}h i ${krajDr2 % 60}min</p>`
    
    document.body.innerHTML +=`<p style="color:blue; font-size: 40px">Preklapaju je se ${houres} sati i ${minuta} minuta.</p>`;
    
    
    


    // 8. Zadatak
    // Za uneta dva broja i karakter napraviti kalkulator koji vrši:
    // ● Množenje ta dva broja ukoliko je uneto slovo ’m’
    // ● Deljenje ukoliko je uneto slovo ’d’
    // ● Sabiranje ukoliko je uneto slovo ’s’
    // ● Oduzimanje ukoliko je uneto slovo ’o’

    let q = 5;
    let w = 7;
    let konacno;
    let slovo = "m";
    if(slovo == "m" || slovo == "M"){
        konacno = q * w;
        console.log(`Mnozenjem brojeva ${q} i ${w} dobija se ${konacno}`);
    }
    else if (slovo == "d" || slovo == "D"){
        konacno = q / w;
        console.log(`Deljenjem brojeva ${q} i ${w} dobija se ${konacno}`);
    }
    else if (slovo == "s" || slovo == "S"){
        konacno = q + w;
        console.log(`Sabiranjem brojeva ${q} i ${w} dobija se ${konacno}`);
    }
    else if (slovo == "o" || slovo == "O"){
        konacno = q - w;
        console.log(`Oduzimanjem brojeva ${q} i ${w} dobija se ${konacno}`);
    }
    else {
        console.log(`Uneli ste pogresno slovo`);
    }




