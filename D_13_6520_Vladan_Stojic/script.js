let sportisti = (resolve, reject) =>{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(){
            if(this.readyState === 4 && this.status === 200){
                // radi nesto kada je sve u redu
                let data = JSON.parse(this.responseText)
                resolve(data);
            }
            else if(this.readyState === 4){
                // radi nesto kada je doslo do greske
                reject("Doslo je do greske!")
            }
        });
        request.open('GET', 'sportisti.json');
        request.send();
}

let prosecnaVisina = arr =>{
    let visina = 0;
    let prVisina;
    arr.forEach(el =>{
        visina += el.visina;
    })
    prVisina = visina / arr.length
    console.log(prVisina);
    
}

// console.log(sportisti(prosecnaVisina));
sportisti(prosecnaVisina);


let najmanjeTransfera = arr =>{
    let min = arr[0].timovi.length;
    arr.forEach(el =>{
        if(min > el.timovi.length){
            min = el.timovi.length;
        }
    });
    arr.forEach(i =>{
        if(min == i.timovi.length){
            console.log(`${i.imePrezime}`);
        }
    })
}

sportisti(najmanjeTransfera)

let igraliZaLejkerse = arr =>{
    arr.forEach(el =>{
        if(el.timovi.includes("Lakers")){
            console.log(el.imePrezime);
        }
    })
}
sportisti(igraliZaLejkerse)