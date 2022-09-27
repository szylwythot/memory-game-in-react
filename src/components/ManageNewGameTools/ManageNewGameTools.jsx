import React, { useContext } from 'react';
import GameBoardContext from '../../GameBoardContext.jsx';
import GameBoardData from '../../gameLogic/GameBoardData.js';
import BasicButton from '../BasicButton/BasicButton.jsx';
import "./ManageNewGameTools.css";

function ManageNewGameTools() {
    const { setGamePlayView, setGameBoardData} = useContext(GameBoardContext);

    function createNewGameBoard(){ // helper func
        setGameBoardData(new GameBoardData(6));
    }

    const handleStartGame = (event) => {
        event.preventDefault();
        console.log("start new game button pressed");
        createNewGameBoard();
        setGamePlayView(true);
    }

    return (
        <div className='ManageNewGameTools'>
            <select name="deck-size" id="deck-size" aria-label='Deck size' className='basic-tool'>
                <option value="default">Deck size</option>
                <option value="4x5">4x5</option>
                <option value="3x4">3x4</option>
                <option value="3x3">3x3</option>
            </select>

            <BasicButton className='start-new-game' text="Start new game" onClick={handleStartGame} />
            {/* <button className='start-new-game' onClick={handleStartGame}>Start new game</button> */}
        </div>
  )
}

export default ManageNewGameTools;