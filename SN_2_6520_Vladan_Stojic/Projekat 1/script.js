let ruza = document.getElementById('ruza');
let ljiljan = document.getElementById('ljiljan');
let gerber = document.getElementById('gerber');
let bombonjera = document.getElementById('bombonjera');
let cokolada = document.getElementById('cokolada');
let sampanjac = document.getElementById('sampanjac');
let kes = document.getElementById('kes');
let kartica = document.getElementById('kartica');
let izracunajBtn = document.getElementById('izracunaj');
let resetujBtn = document.getElementById('resetuj');
let cvetRuza = document.getElementById('brruza');
let cvetLjiljan = document.getElementById('brljiljan');
let cvetGerber = document.getElementById('brgerber');
let cena = document.getElementById('cena')
let cenaBezPopusta = document.getElementById('cenaBezPopusta')
let cenaSaPopustom = document.getElementById('cenaSaPopustom')
let slike;
let slikaRuza = "./img/ruza.png";
let slikaLjiljan = "./img/ljiljan.jpg";
let slikaGerber = "./img/gerber.jpg";

let poklonCokolada = document.getElementById('poklonCokolada')
let poklonBombonjera = document.getElementById('poklonBombonjera')
let poklonSampanjac = document.getElementById('poklonSampanjac')

let disableInput = () =>{
    let allInputs = document.querySelectorAll('input');
    for(let i = 0; i < allInputs.length; i++){
        allInputs[i].disabled = true;
    }
}

izracunajBtn.addEventListener('click', () =>{
    disableInput();
    izracunajBtn.disabled = true;
    let inputRuza = ruza.value * 150;
    let inputLjiljan = ljiljan.value * 120;
    let inputGerber = gerber.value * 70;
    let sveUkupno = inputRuza + inputLjiljan + inputGerber;
    if(bombonjera.checked){
        sveUkupno += 500;
        poklonBombonjera.innerHTML += '+ bombonjera'
    }
    if(cokolada.checked){
        sveUkupno += 500;
        poklonCokolada.innerHTML += '+ cokolada'
    }
    if(sampanjac.checked){
        sveUkupno += 500;
        poklonSampanjac.innerHTML += '+ sampanjac'
    }
    if(ruza.value > 0){
        for(let i = 0; i < ruza.value; i++){
            slike = document.createElement('img');
            slike.src = slikaRuza;
            cvetRuza.appendChild(slike);
        }
    }
    if(ljiljan.value > 0){
        for(let i = 0; i < ljiljan.value; i++){
            slike = document.createElement('img');
            slike.src = slikaLjiljan;
            cvetLjiljan.appendChild(slike);
        }
    }
    if(gerber.value > 0){
        for(let i = 0; i < gerber.value; i++){
            slike = document.createElement('img');
            slike.src = slikaGerber;
            cvetGerber.appendChild(slike);
        }
    }

    cenaBezPopusta.innerHTML = 'cena bez popusta; '
    cenaSaPopustom.innerHTML = 'cena sa popustom; '
    if(kartica.checked && sveUkupno > 2000){
        sveUkupno *= 0.9;
        cenaSaPopustom.innerHTML += sveUkupno + ' din';
    }
    else{
        cenaBezPopusta.innerHTML += sveUkupno + ' din';
    }  
    
});


resetujBtn.addEventListener('click', () =>{
    location.reload();
});
