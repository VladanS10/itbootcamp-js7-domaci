// 1. Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.

let a = ["Hleb", "Mleko", "Cigarete", "Sok", "Jaja", "Kecap"];

let kupiti = niz => {
    let ul = "<ul>";
    niz.forEach(elem => {
        ul += `<li class="lista">${elem}</li>`
    });
    ul += `</ul>`;
    document.body.innerHTML += ul;
}
kupiti(a);

// 2.Zadatak
// Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let b = ["Crvena Zvezda", "Partizan", "Real Madrid", "Barselona", "Armani", "Anadou"];

let kosarka = niz =>{
    let tabela = "<table border= 1>"
    niz.forEach(elem =>{
        tabela += `<tr><td>${elem}</td></td>`    
    });
    tabela += "</table>"
    document.body.innerHTML += tabela;
}
kosarka(b)


// 3. Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.

let c = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfx__RoRYzLDgXDiJxYGxLihJC4zoqV3V0xg&usqp=CAU",
"https://tse4.mm.bing.net/th/id/OIP.bcU2OWuHpDPFZBSIQLDAzgHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
"https://tse4.mm.bing.net/th/id/OIP.CTK56Q6f6lD5cHMroZdLQAHaE7?w=304&h=202&c=7&r=0&o=5&pid=1.7"
];

let slika = niz =>{
    let rez= ""
    niz.forEach(elem =>{
        rez += `<img  src="${elem}">`;
    });
    document.body.innerHTML += rez
}
slika(c);