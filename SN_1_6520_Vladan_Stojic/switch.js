// 1 Zadatak
// Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

// let n = 4;
// switch (n) {
//     case 1:
//         console.log(`Danas je Ponedeljak`)
//         break;
//     case 2:
//         console.log(`Danas je Utorak`);
//         break;
//     case 3:
//         console.log(`Danas je Sreda`);
//         break;
//     case 4:
//         console.log(`Danas je Cetvrtak`);
//         break;
//     case 5:
//         console.log(`Danas je Petak`);
//         break;
//     case 6:
//         console.log(`Danase je Subota`);
//         break;
//     case 7:
//         console.log(`Danas je Nedelja`);
//         break;
//         default:
//             console.log(`Ne postoji dan u nedelji`);
//     }

 // 2. Zadatak
//  Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

// let m = 5;

// switch (m){
//     case 1:
//         console.log(`Ucenik je NEDOVOLJAN`);
//         break;
//     case 2:
//         console.log(`Ucenik je DOVOLJAN`);
//         break;
//     case 3:
//         console.log(`Ucenik je DOBAR`);
//         break;
//     case 4:
//         console.log(`Ucenik je VRLODOBAR`);
//         break;
//     case 5:
//         console.log(`Ucenik je ODLICAN`);
//         break;
//         default:
//             console.log(`Niste uneli validan broj`);
// }

// 3. Zadatak 
// Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

// let n = 12;
// if(n % 2 == 0 && n < 10){
//     switch (n){
//         case 0:
//             console.log(`Unet broj je 0`);
//             break;
//         case 2:
//             console.log(`Unet broj je 2`);
//             break;
//         case 4:
//             console.log(`Unet broj je 4`);
//             break;
//         case 6:
//             console.log(`Unet broj je 6`);
//             break;
//         case 8:
//             console.log(`Unet broj je 8`);
//             break;
//         default:
//     }
// }
// else{
//     console.log(`Neparan broj ili ne manji od 0, ili veci od 10`);
// }

// 4. Zadatak 
// Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’

// let n = 10;
// let l = 5;

// let rezultat = "d";

// switch (rezultat){
//     case "m":
//         console.log(n * l);
//         break;
//     case "M":
//         console.log(n * l);
//         break;
//     case "d":
//         console.log(n / l);
//         break;
//     case "D":
//         console.log(n / l);
//         break;
//     case "s":
//         console.log(n + l);
//         break;
//     case "S":
//         console.log(n + l);
//         break;
//     case "o":
//         console.log(n - l);
//         break;
//     case "O":
//         console.log(n - l);
//         break;
//     default:
//         console.log(`Uneli ste pogresno slovo`);
        
//     }

    // 5. Zadatak
    //Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

    // let vreme = new Date();
    // let ukupnoDana = 6;
    // let time = vreme.getDay();

    // switch(time){
    //     case 0:
    //         console.log(ukupnoDana - time);
    //         break;
    //     case 2:
    //         console.log(ukupnoDana - time);
    //         break;
    //     case 3:
    //         console.log(ukupnoDana - time);
    //         break;
    //     case 4:
    //         console.log(ukupnoDana - time);
    //         break;
    //     case 5:
    //         console.log(`Preostalo je 0 dana`);
    //         break;
    //     case 6:
    //         console.log(`Preostalo je 0 dana`);
    //         break;
    //     default:
    // }




// 6. Zadatak
// Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

// let mesec = vreme.getMonth() + 1;

// switch(mesec){
//     case 1:
//         console.log(`Januar`);
//         break;
//     case 2:
//         console.log(`Februar`);
//         break;
//     case 3:
//         console.log(`Mart`);
//         break;
//     case 4:
//         console.log(`April`);
//         break;
//     case 5:
//         console.log(`Maj`);
//         break;
//     case 6:
//         console.log(`Jun`);
//         break;
//     case 7:
//         console.log(`Jul`);
//         break;
//     case 8:
//         console.log(`Avgust`);
//         break;
//     case 9:
//         console.log(`Septembar`);
//         break;
//     case 10:
//         console.log(`Oktobar`);
//         break;
//     case 11:
//         console.log(`Novembar`);
//         break;
//     case 12:
//         console.log(`Decembar`);
//         break;
//     default:
//         console.log(`Pogresan mesec`);
// }

// 7. Zadatak
let vreme = new Date();
mesec = vreme.getMonth() + 1;
let danaUMesecu;

switch(mesec){
    case 1:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 2:
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            danaUMesecu = 29;
            console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        }
        else{
            danaUMesecu = 28;
            console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        }
        break;
    case 3:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 4:
        danaUMesecu = 30;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 5:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 6:
        danaUMesecu = 30;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 7:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 8:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 9:
        danaUMesecu = 30;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 10:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 11:
        danaUMesecu = 30;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    case 12:
        danaUMesecu = 31;
        console.log(`${mesec} mesec ima ${danaUMesecu} dana`);
        break;
    default:
        console.log(`Greska`);
        break;
    }
    



// 8. Zadatak 
// Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.


let boja = "green";

switch (boja){
    case "red":
        document.body.innerHTML += `<p style="color:red; font-size: 30px"> Paragraf </p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style="color:green; font-size: 30px"> Paragraf </p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style="color:blue; font-size: 30px"> Paragraf </p>`;
        break;
        default:
            document.body.innerHTML += `<p style="color:yellow; font-size: 30px"> Paragraf </p>`;
}


