import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './GamePlayPage.css';
import Navigation from '../Navigation/Navigation.jsx';
import InfoBoard from "../InfoBoard/InfoBoard.jsx";
import GameBoard from '../GameBoard/GameBoard.jsx';
import GameBoardContext from '../../GameBoardContext';
import GameBoardData from '../../gameLogic/GameBoardData';

function GamePlayPage({handleHomeButtonClicked, gamePlayView}) {

    // const {restarted, setRestarted} = useContext(GameBoardContext);
    const {gameBoardData, setGameBoardData} = useContext(GameBoardContext);

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
        // setRestarted(true);
        console.log("restart button clicked");
        let restartedGameBoard = GameBoardData.restartGame(gameBoardData);
        setGameBoardData(restartedGameBoard);
    }

    // useEffect(() => {
    //     console.log("restart button clicked");
    
    //   return () => {
    //     //
    //   }
    // }, [restarted])
    

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