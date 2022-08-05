import React from 'react';
import { Navigate } from 'react-router-dom';
import './GamePlayPage.css';
// import Navigation from '../Navigation';
// import InfoBoard from "../InfoBoard";
// import GameBoard from '../GameBoard';

function GamePlayPage({handleHomeButtonClicked, gamePlayView}) {

    const backgroundStyle={
        backgroundImage: "url(/img/background-game.png)",
        height:'100vh',
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
                {/* <Navigation handleHomeButtonClicked={handleHomeButtonClicked}/> */}
                <div className='gamePlayContainer' >
                    {/* <InfoBoard 
                        currentTries="0"
                        best="0" 
                        handleRestartButtonClicked={handleRestartButtonClicked}
                    />
                    <GameBoard /> */}
                </div>
            </div> :
            <Navigate replace to="/" />
        }
        </div>
    )
}

export default GamePlayPage;