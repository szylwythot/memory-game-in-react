import React from 'react';
import "./PokemonCard.css";
import { useContext, useState, useEffect } from 'react';
import GameBoardContext from '../../GameBoardContext';
import styled, { keyframes } from 'styled-components';

function PokemonCard({pokeCardData}) {
    let {image, backGroundImage, matched, id} = pokeCardData;

    const [flippedOnUi, setFlippedOnUi] = useState(false);
    const [matchedOnUi, setMatchedOnUi] = useState(matched);
    const [revealedFirst, setRevealedFirst] = useState(false);
    const [flipping, setFlipping] = useState(false);

    let {onPokeCardClicked} = useContext(GameBoardContext);

    // backgroung-image = ${image}
    const flipAnimation = keyframes`
    0% {
        transform: rotate(180deg);
        background-image: #F1B99B;
        opacity: 30%;
        background-image: url(${image});
    }
    90%{
        background-color: #F1B99B;
        opacity: 95%;
        background-image: url(${image});
    }
    100% {
        transform: rotate(0deg);
        background-color: #98C865;
        opacity: 1;
        background-image: url(${image});
      }
    `;

    const FlippingCard = styled.div`
    height: 160px;
    width: 160px;
    animation: 1s ease-in-out ${flipAnimation};
    `
    // const Container = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    // height: 450px;
    // `

    useEffect(() => {
        // toggle flipping

        if(flipping){
            const timer = setTimeout(() => {
                console.log("WE are flipping");
                setFlipping(false);
              }, 1000);
              return () => clearTimeout(timer);
        } else {
            console.log("WE are not flipping.")
        }
    }, [flipping]);

    let onCardClicked = (event) =>{

        // flip if needed
        console.log("Card clicked");
        if(revealedFirst){
            return;
        } else if(matched) {
            return;
        } else {
            // flip
            setFlipping(true);
            setFlippedOnUi(!flippedOnUi);
        }

        // let card = event.target;
        // console.log(pokeCardData);

        onPokeCardClicked(pokeCardData);
        setMatchedOnUi(matched);
        // setFlippedOnUi(pokeCardData.flipped); // these two lines should be somewhere else with card state changed "event"
        // setMatchedOnUi(matched);
    }

    return (
        <div className='poke-card'>
            {
                matchedOnUi?
                <img 
                    src={image} 
                    alt="" 
                    className={(id + " poke-card-img matched") }
                    onClick={onCardClicked}
                />:
                flipping ?
                <FlippingCard />:
                flippedOnUi ?
                <img 
                    src={image} 
                    alt="" 
                    className={(id + " poke-card-img") }
                    onClick={onCardClicked}
                /> :
                <img 
                    src={backGroundImage} 
                    alt="" className={(id + " poke-card-img") }
                    onClick={onCardClicked}
                />
            }
        </div>
    )
}

export default PokemonCard