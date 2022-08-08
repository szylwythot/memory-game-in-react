import React from 'react';
import BasicButton from '../BasicButton/BasicButton.jsx';
import ManageNewGameTools from '../ManageNewGameTools/ManageNewGameTools.jsx';
import './Navigation.css';

function Navigation({handleHomeButtonClicked}) {

    return (
        <nav>
            <BasicButton className="Home" text="Home" onClick={handleHomeButtonClicked}/>
            <ManageNewGameTools />
        </nav>
    )
}

export default Navigation;