import React from 'react';
// import pokemonTitle from '../img/pokemon-title.png';
import ManageNewGameTools from '../ManageNewGameTools/ManageNewGameTools.jsx';
import "./WelcomePage.css"

function WelcomePage({handleStartGame}) {
    const backgroundStyle={
        backgroundImage: "url(/img/background-start.png)",
        height:'100vh',
        // left: '50%',
        // transform stranlate
        marginTop:'0',
        // fontSize:'50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };
  return (
    <div className='welcome-page' style={backgroundStyle}>
        
        {/* <img src="img/background-start.png" alt="Background" className='home-background'/> */}
        <img src="img/pokemon-title.png" alt="Pokemon Title" className='poke-title-img'/>
        <ManageNewGameTools handleStartGame={handleStartGame}/>
    </div>
  )
}

export default WelcomePage;