let movies = db.collection("movies")

let movie2 = {
    name: "Batman",
    director: "Tim Burton",
    release_year: 2022,
    genres: ["Action","Crime", "Drama"],
    rating: 7.5
}
let movie3 = {
    name: "Spiderman",
    director: "Jon Watts",
    release_year: 2019,
    genres: ["Action","Crime", "Comedy"],
    rating: 7.4
}

// Dodaje filmove

db.collection("movies")
.doc("movie2")
.set(movie2)
.then(()=>{
    console.log(`Uspesno unet obj movie 2`);
})
.catch(err =>{
    console.log(`Nije unet obj movie 2`, err);
});

db.collection("movies")
.doc("movie3")
.set(movie3)
.then(()=>{
    console.log(`Uspesno unet obj movie 3`);
})
.catch(err =>{
    console.log(`Nije unet obj movie 3`, err);
});


/// Menja podatke u bazi za movie2
db.collection("movies")
.doc("movie2")
.update({
    rating: 8.5
})
.then(()=>{
    console.log(`Uspesno promenjen rating obj movie 3`);

})
.catch(err =>{
    console.log(`Nije promenjen rating obj movie 3`, err);
});

/// Menja podatke u bazi za movie3
db.collection("movies")
.doc("movie3")
.update({
    rating: 7.3
})
.then(()=>{
    console.log(`Uspesno promenjen rating obj movie 3`);

})
.catch(err =>{
    console.log(`Nije promenjen rating obj movie 3`, err);
});


// Dodaje zanr movie2
db.collection("movies")
.doc("movie2")
.update({
    genres: firebase.firestore.FieldValue.arrayUnion("Horror")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})

// Dodaje zanr movie3
db.collection("movies")
.doc("movie3")
.update({
    genres: firebase.firestore.FieldValue.arrayUnion("Mistery")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})

// Brisanje zanra movie 2
db.collection("movies")
.doc("movie2")
.update({
    genres: firebase.firestore.FieldValue.arrayRemove("Drama")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})

// Brisanje zanra movie 3
db.collection("movies")
.doc("movie3")
.update({
    genres: firebase.firestore.FieldValue.arrayRemove("Action")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})


// Menja ime i prezime movie2
db.collection("movies")
.doc("movie2")
.update({
    director: "Pera Peric",
    release_year: 1995
})
.then(()=>{
    console.log(`Uspesno promenjen ime obj movie 3`);
})
.catch(err =>{
    console.log(`Nije promenjen imeobj movie 3`, err);
})

// Menja ime i prezime movie3
db.collection("movies")
.doc("movie3")
.update({
    director: "Vladan Stojic"
})
.then(()=>{
    console.log(`Uspesno promenjen ime obj movie 3`);
})
.catch(err =>{
    console.log(`Nije promenjen imeobj movie 3`, err);
})