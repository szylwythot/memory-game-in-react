import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GamePlayPage from './components/GamePlayPage/GamePlayPage.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import GameBoardContext from './GameBoardContext';
// import GameBoardData from './gameLogic/GameBoardData';

function App() {
    const [gamePlayView, setGamePlayView] = useState(false);
    const [gameBoardData, setGameBoardData] = useState({});
    //  const {gameBoardData} = useContext(GameBoardContext);


    function handleHomeButtonClicked(){
        console.log("home button pressed");
        setGamePlayView(false);
    }

    function onPokeCardClicked(card){
        gameBoardData.cardClicked(card);
    }

    // useEffect(() => {
    //   console.log(gameBoardData.fullSize);
    
    // //   return () => {
    // //     second
    // //   }
    // }, [gameBoardData]);
    

    return (
        <div className="App">
            <GameBoardContext.Provider value={{gamePlayView, setGamePlayView, gameBoardData, setGameBoardData, handleHomeButtonClicked, onPokeCardClicked}}>
            <BrowserRouter>
                    <Routes>
                        <Route exact path={"/"} element={ 
                            !gamePlayView ? 
                            <WelcomePage /> : 
                            <Navigate replace to="/game-play" />
                        }/>
                        <Route 
                            path="/game-play" 
                            element={
                                <GamePlayPage 
                                    handleHomeButtonClicked ={handleHomeButtonClicked} 
                                    gamePlayView={gamePlayView}
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </GameBoardContext.Provider>
        </div>
    );
}

export default App;
