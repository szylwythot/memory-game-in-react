import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GamePlayPage from './components/GamePlayPage/GamePlayPage.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';

function App() {
    const [gamePlayView, setGamePlayView] = useState(false);

    function handleStartGame(){
        console.log("start new game button pressed");
        // createNewGameBoard();
        setGamePlayView(true);
    }

    function handleHomeButtonClicked(){
        console.log("home button pressed");
        setGamePlayView(false);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={ 
                        ! gamePlayView ? 
                        <WelcomePage handleStartGame={handleStartGame}/> : 
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
        </div>
  );
}

export default App;
