import { Knjiga } from "./knjiga.js"

let knjiga1 = new Knjiga("Petar Pan", "James Matthew Barrie", 1980, 650, 8500);
let knjiga2 = new Knjiga("Orlovi rano lete", "Branko Copic", 1970, 750, 15500);
let knjiga3 = new Knjiga("Mali Princ", "Antoan de Sent Egziperi", 1972, 50, 3550);

let knjige = [knjiga1, knjiga2, knjiga3];

console.log(knjiga1);
console.log(knjiga2);
console.log(knjiga3);

console.log(knjiga1.cena);

knjiga1.stampaj()
knjiga1.obimna()
knjiga1.skupa()
knjiga1.dugacnoIme()
knjiga2.dugacnoIme()
knjiga3.dugacnoIme()


knjige.forEach(el =>{
    if(el.dugacnoIme()){
        console.log(el.autor);
    }
})
knjige.forEach(el =>{
    if(el.obimna() && el.skupa()){
        console.log(el.naslov);
    }
})

let ukupnaCena = arr =>{
    let ukupnoKostaju = 0;
    arr.forEach(el =>{
        ukupnoKostaju += el.cena
    });
    return ukupnoKostaju
    
}
console.log(ukupnaCena(knjige));
ukupnaCena(knjige)


let prosecnaCena = arr =>{
    let prCena = 0;
    let ukupno = ukupnaCena(arr)
    // console.log(arr.length);
    prCena = ukupno / arr.length
    return prCena
}
console.log(prosecnaCena(knjige));
prosecnaCena(knjige)


let prosecnaStranica = arr =>{
    let ukupno = ukupnaCena(arr)
    let ukupnoStranica = 0
    arr.forEach(el =>{
        ukupnoStranica += el.brojStrana
    });
    return ukupno / ukupnoStranica
}

console.log(prosecnaStranica(knjige));