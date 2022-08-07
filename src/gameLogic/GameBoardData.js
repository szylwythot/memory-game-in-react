import imgBack from "../img/card-back.png";
import card1 from '../img/card-poke1.png';
import card2 from '../img/card-poke2.png';
import card3 from '../img/card-poke3.png';
import card4 from '../img/card-poke4.png';
import card5 from '../img/card-poke5.png';
import card6 from '../img/card-poke6.png';
import card7 from '../img/card-poke7.png';
import card8 from '../img/card-poke8.png';
import card9 from '../img/card-poke9.png';
import card10 from '../img/card-poke10.png';
import PokemonCardData from "./PokemonCardData";

class GameBoardData{
    cardImages = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

    constructor(size){
        this.size = size; // > 10 ? size : NaN;
        this.fullSize = size * size;
        this.cards=[];
        this.populateBoard();
        this.firstClickedCard = {};
        this.numberOfMatchedPairs = 0;
        this.gotWinner = false;
        this.isFirstCardSelected = function(){
        return Object.keys(this.firstClickedCard).length === 0;
        // return true;
        }
        // this.pairingFinished = false;
    }

    // flipcard logic
    cardClicked = function (card){
        if(card.matched){
            console.log("Card is already matched.")
            return;
        }

        if(this.isFirstCardSelected()){
            console.log("First card is clicked.");
            this.firstClickedCard = card;
            // card.flip();

        } else if(this.firstClickedCard !== card){
            console.log("Second card is clicked")
            // check the match
            if(card.tryMatch(this.firstClickedCard)){
                console.log("cards are matching!")
                this.numberOfMatchedPairs += 1;

                // check winning
                if(this.numberOfMatchedPairs === this.size){
                    this.gotWinner = true;
                    console.log("We got a winner!!!")
                }

            } else {
                console.log("cards dont match, try again!")
                // if it is now a match we flip them back
                // this.firstClickedCard.flip();
                // card.flip();
            }
            this.firstClickedCard = {};
        }
    }

    populateBoard = function (){
        console.log("Board is being populated");
        // console.log(imgBack);

        console.log(this.size);
        if(isNaN(this.size)){
            throw Error("Size is too big");
        }

        // create cards
        for(let i = 0; i < this.size; i++){
            console.log(i);
            let cardType = "card" + i
            let first = new PokemonCardData(this.cardImages[i], cardType, imgBack);
            let second = new PokemonCardData(this.cardImages[i], cardType, imgBack);
            // second.pairWithCard(first);
            this.cards.push(first, second);
        }
        
        // shuffle cards
        this.cards.sort((a,b) => Math.random() - 0.5);
        console.log(this.cards);
    }
}

export default GameBoardData;