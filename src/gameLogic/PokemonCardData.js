class PokemonCardData  {
    // static idCounter = 0;

    constructor(addOneMatch, image, typeID, backGroundImage="", matched=false, selected=false){
        this.addOneMatch = addOneMatch;
        this.image = image;
        this.typeID = typeID;
        this.backGroundImage = backGroundImage;
        this.matched = matched;
        this.selected = selected;
        this.gererateId(image); // sets this.id
    }

    tryMatch = function (card){
        console.log("I try to match.");

        let result = false;
        
        if(card.typeID === this.typeID){
            console.log("We are matching:)")
            this.matched = true;
            card.matched = true;
            this.addOneMatch();
            result = true;
        }

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
