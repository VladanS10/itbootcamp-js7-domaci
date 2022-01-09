// 1. Zadatak

let knjiga1 = {
    naziv: "Orlovi rano lete",
    autor: "Branko Copic",
    link: "./img/orlovi_rano_lete.jpg",
    indikator: true
}
let knjiga2 = {
    naziv: "Na Drini Cuprija",
    autor: "Ivo Andric",
    link: "./img/nadrinicuprija.jpg",
    indikator: true
}
let knjiga3 = {
    naziv: "Ana Karenjina",
    autor: "Lav Tolstoj",
    link: "./img/anakarenjina.jpg",
    indikator: false
}
let knjige = [knjiga1, knjiga2, knjiga3];

let table = document.createElement('table');
let images;
let par;
let tableRow;
let tableData;
let tableData2;

for(let i =0; i < knjige.length; i++){
    tableRow = document.createElement(`tr`);
    table.appendChild(tableRow);
    tableData = document.createElement('td');
    tableData2 = document.createElement('td');
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
    images = document.createElement('img');
    
    tableData.appendChild(images);
    images.src = knjige[i].link;
    images.style = "width: 200px; height: 100%";
    par = document.createElement('p');
    tableData2.appendChild(par);
    par.appendChild(document.createTextNode(knjige[i].autor + ": " + knjige[i].naziv));
    
    if(knjige[i].indikator == true){
        par.style.color = 'blue';
    }
    else{
        par.style.color = 'red';
    }
    
    if(i % 2 == 0){
        tableRow.style.backgroundColor = 'orange'
    }
    else{
        tableRow.style.backgroundColor = 'yellow'
    }

    table.style= "width: 300px;"
    document.body.appendChild(table);
}



