import React from 'react';
import BasicButton from '../BasicButton/BasicButton.jsx';
import ManageNewGameTools from '../ManageNewGameTools/ManageNewGameTools.jsx';
import './Navigation.css';

function Navigation({handleHomeButtonClicked, handleStartGame}) {
  return (
    <nav>
        <BasicButton className="Home" text="Home" onClick={handleHomeButtonClicked}/>
        <ManageNewGameTools handleStartGame={handleStartGame}/>
    </nav>
  )
}

export default Navigation;