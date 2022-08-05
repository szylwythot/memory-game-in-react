import React from 'react';
import BasicButton from '../BasicButton/BasicButton.jsx';
import "./ManageNewGameTools.css";

function ManageNewGameTools({handleStartGame}) {
    
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