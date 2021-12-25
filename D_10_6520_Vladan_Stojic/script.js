

let obj = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temp: [25, 5, 15, -25],
    // 1. Zadatak
    tropski: function(){
        for(let i = 0; i < this.temp.length; i++){
            if(this.temp[i] < 24){
                return false
            }
        }
        return true;
    },
    // 2. Zadatak
    nepovoljan: function(){
        for(let i = 0; i< this.temp.length; i++){
            if(this.temp[i] - this.temp[i+1] > 8){
                return true;
            }
            else if (this.temp[i] - this.temp[i+1] < -8){
                return true;
            }
        }
        return false
    },



    // 3. Zadatak
    neuobicajno: function(){
        let vreme = this.temp;
        for(let i = 0; i< vreme.length; i++){
            if(this.kisa == true && vreme[i] < -5){
                return true;
            }
            else if (this.oblacno == true && vreme[i] >25){
                return true;
            }
            else if(this.kisa == true && this.oblacno == true && this.sunce == true){
                return true;
            }
        }
        return false;
    }

    }
    console.log(obj.tropski());
    console.log(obj.nepovoljan());
    console.log(obj.neuobicajno());


