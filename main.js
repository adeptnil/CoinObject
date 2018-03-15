const coinDiv = document.getElementById("coinPlate");



var coin = {
    state: 0,
    flip: function() {
        console.log(this.state);
        return this.state = Math.round(Math.random());
        // randomly set this.state to be either 0 or 1
    },


    toString: function() {
        var letters = document.createElement("div");
        var letterChoice =  this.state ? "T" : "H";
        // return this.state ? "T" : "H";

        letters.innerHTML = letterChoice;
        return letters;

        // return “H” or “T” depending on whether this.state is 0 or 1

//Attempt #3 logic/refactoring
        // return (this.state === 0) ? "H" : "T";
//Attempt #2 logic/refactoring
        // if ( this.state === 0 ) {
        //     return "H"
        // } else {
        //     return "T"
        // };
// Attempt #1 logic
        // switch(this.state) {
        //     case 0: // in the case where coin.state is 0, then switch to the code below
        //         return "H";
        //     case 1: // in the case where coin.state is 1, then switch to the code below
        //         return "T";
        // }
    },



    toHTML: function() {
        var img = document.createElement("img");
        if (this.state === 0){
            img.src = "heads.png"
        } else {
            img.src = "tails.png"
        }
        return img;
    }
};


console.log("coin flip:", coin.flip());
console.log("coin toHTML:", coin.toHTML());
console.log("coin toString:", coin.toString());

for (let i = 0; i < 20; i++){
coin.flip();
coinDiv.appendChild(coin.toHTML());
coinDiv.appendChild(coin.toString());
};