export class Knjiga {
    constructor(n, a, gI, bS, c){
        this.naslov = n;
        this.autor = a;
        this.godinaIzdanja = gI;
        this.brojStrana = bS;
        this.cena = c;
    }
    set naslov(n){
        this._naslov = n
    }
    get naslov(){
        return this._naslov
    }
    set autor(a){
        this._autor = a;
    }
    get autor(){
        return this._autor
    }
    set godinaIzdanja(gI){
        this._godinaIzdanja = gI;
    }
    get godinaIzdanja(){
        return this._godinaIzdanja
    }
    set brojStrana(bS){
        this._brojStrana = bS;
    }
    get brojStrana(){
        return this._brojStrana
    }
    set cena(c){
        this._cena = c;
    }
    get cena(){
        return this._cena
    }
    stampaj() {
        console.log(this);
    }
    obimna(){
        return (this._brojStrana > 600)? true : false
    }
    skupa(){
        return (this._cena > 8000)? true : false
    }
    dugacnoIme(){
        return (this._autor.length > 18)? true : false
    }

}