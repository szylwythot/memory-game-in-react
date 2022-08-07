import React from 'react';
import BasicButton from '../BasicButton/BasicButton.jsx';
import "./InfoBoard.css";

function InfoBoard({currentTries, best, handleRestartButtonClicked}) {
  return (
    <div className='info-board'>
        <h2>{"Current tries: " + currentTries}</h2>
        <h2>{"Best: " + best}</h2>
        <BasicButton className="restart-game" text="Restart" onClick={handleRestartButtonClicked}/>
    </div>
  )
}

export default InfoBoard