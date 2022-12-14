class PokemonCardData  {
    // static idCounter = 0;

    constructor(image, typeID, backGroundImage="", matched=false, selected=false){
        this.image = image;
        this.typeID = typeID;
        this.backGroundImage = backGroundImage;
        this.matched = matched;
        this.selected = selected;
        this.gererateId(image); // sets this.id
    }


    // flip = function () {
    //     if(!this.matched){
    //         console.log("I flip the card!")
    //         this.flipped = !this.flipped;
    //     }
    // }

    tryMatch = function (card){
        console.log("I try to match.");

        let result = false;
        
        if(card.typeID === this.typeID){
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
