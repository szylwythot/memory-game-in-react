import React from 'react';
import { Navigate } from 'react-router-dom';
import './GamePlayPage.css';
import Navigation from '../Navigation/Navigation.jsx';
import InfoBoard from "../InfoBoard/InfoBoard.jsx";
import GameBoard from '../GameBoard/GameBoard.jsx';

function GamePlayPage({handleHomeButtonClicked, gamePlayView}) {

    const backgroundStyle={
        backgroundImage: "url(/img/background-game.png)",
        height:'calc(100vh - 80px)',
        // left: '50%',
        // transform stranlate
        marginTop:'80px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };

    function handleRestartButtonClicked(){
        console.log("restart button clicked");
    }

    return (
        <div style={backgroundStyle}>
        { 
            gamePlayView ?
            <div className='game-play-page'>
                <Navigation handleHomeButtonClicked={handleHomeButtonClicked}/>
                <div className='gamePlayContainer' >
                    <InfoBoard 
                        currentTries="0"
                        best="0" 
                        handleRestartButtonClicked={handleRestartButtonClicked}
                    />
                    <GameBoard />
                </div>
            </div> :
            <Navigate replace to="/" />
        }
        </div>
    )
}

export default GamePlayPage;