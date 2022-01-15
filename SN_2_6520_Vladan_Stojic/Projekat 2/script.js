let pitanje1 = {
    tekst: 'Ko je osvojio Lords of Waterdeep?',
    odgovori: ['Vladan i Kenny', 'Boxa i Miljan', 'Niko od ponudjenih'],
    tacanOdgovor: function() {
        return this.odgovori[0];
    }  
} 
let pitanje2 = {
    tekst: 'Koje godine je bio kosovski boj?',
    odgovori: [1745, 1114, 1389, 1371],
    tacanOdgovor: function(){
        return this.odgovori[2]
    }
}
let pitanje3 = {
    tekst: 'Koje boje je limun?',
    odgovori: ['Beo', 'Crven', 'Zut', 'Crn', 'Plav'],
    tacanOdgovor: function(){
        return this.odgovori[2]
    }
}
let pitanje4 = {
    tekst: 'Izbaci uzelja',
    odgovori: ['Kenny', 'Miljan', 'Vladan'],
    tacanOdgovor: function(){
        return this.odgovori[1]
    }
}
let pitanje5 = {
    tekst: 'Koliko sata ima u jednom danu?',
    odgovori: [25, 48, 15, 13, 24],
    tacanOdgovor: function(){
        return this.odgovori[4]
    }
}
let pitanje6 = {
    tekst: 'Kog Januara nastavljamo sa ucenjem?',
    odgovori: [7, 9, 11, 10, 14],
    tacanOdgovor: function(){
        return this.odgovori[3]
    }
}
let pitanje7 = {
    tekst: 'Koja zivotinja nije domaca?',
    odgovori: ['Kokoska', 'Krava', 'Svinja', 'Ovca', 'Pingvin'],
    tacanOdgovor: function(){
        return this.odgovori[4]
    }
}
let pitanje8 = {
    tekst: 'Kako se pravilno kaze?',
    odgovori: ['Ne znam', 'Neznam', 'Nez nam'],
    tacanOdgovor: function(){
        return this.odgovori[0]
    }
}
let pitanje9 = {
    tekst: 'Ko je predsednik Srbije?',
    odgovori: ['Vladan Stojic', 'Milos Bikovic', 'Svetlana Raznatovic', 'Miljana Kulic', 'Aleksandar Vucic'],
    tacanOdgovor: function(){
        return this.odgovori[4]
    }
}
let pitanje10 = {
    tekst: 'Koje je prvo slovo azbuke?',
    odgovori: ['P', 'D', 'G', 'E', 'F', 'A'],
    tacanOdgovor: function(){
        return this.odgovori[5]
    }
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];
pitanja.sort(()=> 0.5 - Math.random());

let posaljiBtn = document.getElementById('posalji')
let resetujBtn = document.getElementById('reset')
let kviz = document.getElementById('kviz')


let ispisPitanja = (arr) =>{
    let sekcija = `<section>`;
    let br = 0;
    for(let i = 0; i < 5; i++){
        sekcija += `<h2>${arr[i].tekst}</h2>`;
        br++
        let tacanIndex = arr[i].tacanOdgovor();
        let br2 = 0; 
        for(let j = 0; j < arr[i].odgovori.length; j++){
            br2 ++;
            if(arr[i].odgovori[j] == tacanIndex){
                sekcija += `<input id="r${br}${br2}" type="radio" class="flash" name="${arr[i].tekst}">`
                sekcija += `<label for="r${br}${br2}">${arr[i].odgovori[j]}</label> <br>`
            }
            else{
                sekcija += `<input id="r${br}${br2}" type="radio" name="${arr[i].tekst}">`
                sekcija += `<label for="r${br}${br2}">${arr[i].odgovori[j]}</label> <br>`
            }
        }
    }
    sekcija += `</section> <hr>`
    kviz.innerHTML += sekcija
}

ispisPitanja(pitanja)

let tacniInputiKlasa = document.querySelectorAll('.flash')

let disableInput = () =>{
    let allInputs = document.querySelectorAll('input');
    for(let i = 0; i < allInputs.length; i++){
        allInputs[i].disabled = true;
    }
}

posaljiBtn.addEventListener("click", ()=>{

    disableInput();
    posaljiBtn.disabled = true
    for(let i = 0; i < tacniInputiKlasa.length; i++){
        if(tacniInputiKlasa[i].checked){
            document.body.innerHTML += `<span style="color: green;">${i + 1} Tacan odgovor</span><br>`
        }
        else{
            document.body.innerHTML += `<span style="color: red;">${i + 1} Netacan odgovor</span><br>`
        }
    }
});

// resetujBtn.addEventListener("click", ()=>{
//     location.reload()
// });
