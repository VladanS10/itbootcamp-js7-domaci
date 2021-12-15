// 1. Zadatak
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m){
    let suma = 1;
    for(let i = n; i <= m; i++){
        suma *= i;
    }
    console.log(suma);
}
mnozi(3,6);



// // 2. Zadatak
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function vrati(n, m){
    let sredina;
    let brojac = 0;
    let suma = 0;
    for(let i = n; i <= m; i++){
        suma += i;
        brojac++;
    }
    sredina = suma / brojac;
    return sredina;
}
let povracaj = vrati(2, 15);
console.log(`Aritmeticka sredina sume je: ${povracaj}`);



// 3. Zadatak

// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function vrati2(n, m){
    let sredina;
    let suma = 0;
    let brojac= 0;
    for(let i = n; i <= m; i++){
        suma += i;
        if(i % 10 == 3){
            brojac++;
        }
    }
    sredina = suma / brojac;
    return sredina
}
let arSredina = vrati2(2,24);

console.log(`Aritmeticka sredina sume je: ${arSredina}`);




// 4. Zadatak
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function velP(m){
    document.body.innerHTML = `<p style="font-size:${m}px">Random recenika koja treba da bude ovde</p>`
}
velP(57);

