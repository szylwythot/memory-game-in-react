class PokemonCardData  {
    // static idCounter = 0;

    constructor(image, backGroundImage="", machingDataCard={}, matched=false){
        this.image = image;
        this.machingDataCard = machingDataCard;
        this.backGroundImage = backGroundImage;
        this.matched = matched;
        this.gererateId(image); // sets this.id
    }

    pairWithCard = function (card){
        this.machingDataCard = card;
        card.machingDataCard = this;
    }

    // flip = function () {
    //     if(!this.matched){
    //         console.log("I flip the card!")
    //         this.flipped = !this.flipped;
    //     }
    // }

    // isMatching = function (card){
    //     if(card === this){
    //         this.matched = true;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    tryMatch = function (card){
        console.log("I try to match.");

        let result = false;
        if(card === this){
            console.log("WE are matching:)")
            this.matched = true;
            card.matched = true;
            result = true;
        }

        // We have to flip them back either way they are matching or not

        // this.flip();
        // card.flip();
        // console.log("WE are flipping after the trying the match making")

        return result;
    }

    gererateId = function (mystring) {
        let random = (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""); // generate random letters
        // this.idCounter += 1;
        // console.log(this.idCounter);
        this.id = mystring + random;
    }
}

export default PokemonCardData;
