import React from 'react';
import { useContext } from 'react';
import GameBoardContext from '../../GameBoardContext';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import "./GameBoard.css";

function GameBoard() {
    const {gameBoardData} = useContext(GameBoardContext);

    return (
        <div className='pokemon-cards'>
            {
                gameBoardData.cards.map((card) => {
                    return <PokemonCard key={card.id} pokeCardData={card}/>
                })
            }
        </div>
    )
}

export default GameBoard;