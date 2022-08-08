import React, { useState } from 'react';
import { useContext } from 'react';
import GameBoardContext from '../../GameBoardContext';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import "./GameBoard.css";
// import GameBoardData from '../../gameLogic/GameBoardData';

function GameBoard() {
    const [firstClickedCard, setFirstClickedCard] = useState({});

    const {gameBoardData} = useContext(GameBoardContext);
    
    let isFirstCardSelected = function(){
        return Object.keys(firstClickedCard).length === 0;
    }

    function onPokeCardClicked(card){

        if(card.matched){
            console.log("Card is already matched.")
            return;
        }

        if(!isFirstCardSelected()){
            console.log("First card is clicked.");
            setFirstClickedCard(card);

        } else if(firstClickedCard === card){
            console.log("First card is clicked again, click on another card!")
            return;
        } else {
            console.log("Second card is clicked.")
            setFirstClickedCard({}); 

            // check the match
            if(card.tryMatch(firstClickedCard)){

                console.log("cards are matching!")
                // gameBoardData.numberOfMatchedPairs += 1; // its a logic, went to card and board data
                // check winning
                if(gameBoardData.hasWinner()){
                    // set some context to true
                    console.log("We got a winner!!!")
                }

            } else {
                console.log("cards dont match, try again!");
            }
        }
    }

    return (
        <div className='pokemon-cards'>
            {
                // restarted ?
                // gameBoardData.cards.map((card) => {
                //     return <PokemonCard key={card.id} pokeCardData={card} onPokeCardClicked={onPokeCardClicked}/>
                // }) :
                gameBoardData.cards.map((card) => {
                    return <PokemonCard key={card.id} pokeCardData={card} onPokeCardClicked={onPokeCardClicked}/>
                })
            }
        </div>
    )
}

export default GameBoard;