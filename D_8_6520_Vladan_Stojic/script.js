// 1. Zadatak
// Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.
        // 0  1  2  3  4  5
let niz = [1, 2, 3, 4, 5, 6,7];
let parni = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0){
            suma += niz[i];
        }
    }
    // console.log(suma);
    return suma;
}
console.log(parni(niz));



// 2. Zadatak

//  Napisati funkciju kojoj se prosleđuje celobrojni nizak s, a ona menja znvakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.
// console.log(niz);

         // 0  1   2  3  4   5   6
let niz2 = [9, 1, 15, 2, 11, 5, 25];
let promena = niz2 =>{
    for(let i = 0; i < niz2.length; i++){
        if(niz2[i] % 2 != 0 && i % 2 == 0){
            niz2[i] = -niz2[i];
        }
    }
}
promena(niz2);
console.log(niz2);

// 3. Zadatak
//  Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.
        //  0  1   2   3   4   5    6    7
let niz3 = [1, 12, 15, 27, 35, 74, 150, 164];

let prosledjuje = niz3 => {
    let neparni = 0;
    for(let i = 0; i < niz3.length; i++){
        if(i % 2 != 0){
            neparni++;
        }
    }
    return neparni;
}
console.log(prosledjuje(niz3));


