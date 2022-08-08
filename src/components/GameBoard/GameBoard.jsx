import React from 'react';
import { useContext } from 'react';
import GameBoardContext from '../../GameBoardContext';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import "./GameBoard.css";
// import GameBoardData from '../../gameLogic/GameBoardData';

function GameBoard() {
    // const [gameBoardData, setGameBoardData] = useState({});
    const {gameBoardData} = useContext(GameBoardContext);

    function onPokeCardClicked(card){
        cardClicked(card);
    }

    // flipcard logic
    let cardClicked = function (card){
        if(card.matched){
            console.log("Card is already matched.")
            return;
        }

        if(gameBoardData.isFirstCardSelected()){
            console.log("First card is clicked.");
            gameBoardData.firstClickedCard = card;
            // card.flip();

        } else if(gameBoardData.firstClickedCard !== card){
            console.log("Second card is clicked")
            // check the match
            if(card.tryMatch(gameBoardData.firstClickedCard)){
                console.log("cards are matching!")
                gameBoardData.numberOfMatchedPairs += 1;

                // check winning
                if(gameBoardData.numberOfMatchedPairs === gameBoardData.size){
                    gameBoardData.gotWinner = true;
                    console.log("We got a winner!!!")
                }

            } else {
                console.log("cards dont match, try again!")
                // if it is now a match we flip them back
                // gameBoardData.firstClickedCard.flip();
                // card.flip();
            }
            gameBoardData.firstClickedCard = {};
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