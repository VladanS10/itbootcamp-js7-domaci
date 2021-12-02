// ZADATAK 1

let n = 5;
let m = 28;
let i = n;
let proizvod = 1;
while(i <= m){
    if(i % 7 == 0 && i % 3 != 0 ){
        proizvod *= i;
    }
    i++;
    
}
console.log(`Proizvod svih brojeva izmedju ${n} i ${m} je: ${proizvod}`);

// ZADATAK 2

n = 3;
m = 21;
i = n;
let zbir = 0;

while(i <= m){
    if(i % 3 == 0 && i % 7 !=0){
        zbir+= i;
    }
    i++;
}
console.log(`Zbir brojeva koji se nalaze izmedju brojeva ${n} i ${m} je ${zbir}`);