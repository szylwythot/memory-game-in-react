import React from 'react';
import "./PokemonCard.css";
import { useContext, useState, useEffect } from 'react';
import GameBoardContext from '../../GameBoardContext';
import styled, { keyframes } from 'styled-components';

function PokemonCard({pokeCardData, onPokeCardClicked}) {
    let {image, backGroundImage, matched, id} = pokeCardData;

    const [flippedOnUi, setFlippedOnUi] = useState(false);
    const [matchedOnUi, setMatchedOnUi] = useState(matched);
    const [selectedOnUi, setSelectedOnUi] = useState(false);
    const [flipping, setFlipping] = useState(false);
    const [waitForFlippingBack, setWaitForFlippingBack] = useState(false);

    const {gameBoardData, setGameBoardData} = useContext(GameBoardContext);

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

    // useEffect(() => {
    //     // toggle flipping
    //     setFlipping(true);
    //     const timer = setTimeout(() => {
    //         console.log("WE are flipping");
    //         setFlipping(false);
    //         }, 1000);
    //     setFlipping(false);
    //     setFlippedOnUi(true);

    //     return () => clearTimeout(timer);
    // }, [selected]);

    useEffect(() => {
        // toggle flipping

        if(flipping){
            const timer = setTimeout(() => {
                console.log("We are flipping");
                setFlipping(false);
            }, 1000);

            return () => clearTimeout(timer);
        } 
    }, [flipping]);

    useEffect(() => {
        // toggle flipping

        if(waitForFlippingBack){
            const timer = setTimeout(() => {
                console.log("We waited 1.5 sec.");
                setWaitForFlippingBack(false);
            }, 1500);

            return () => clearTimeout(timer);
        } 
    }, [waitForFlippingBack]);

    let onCardClicked = () =>{

        const toggleFlippedOnUi = () =>{
            setFlippedOnUi(!flippedOnUi);
        }

        // flip if needed
        console.log("Card clicked");

        if(selectedOnUi){
            return;
        } else if (pokeCardData.matched){
            return;
        } else {

            onPokeCardClicked(pokeCardData); // check whether they are a match

            setFlipping(true);
            toggleFlippedOnUi();
            
            if(pokeCardData.matched){
                setMatchedOnUi(true);
            } else {
                setWaitForFlippingBack(true);
                setFlipping(true);
                toggleFlippedOnUi();
            }
        }
            
            // flip

        // let card = event.target;
        // console.log(pokeCardData);

        setMatchedOnUi(matched);
        // setFlippedOnUi(pokeCardData.flipped); // these two lines should be somewhere else with card state changed "event"
        // setMatchedOnUi(matched);
    }

    return (
        <div className='poke-card' onClick={onCardClicked}>
            {
                matchedOnUi?
                <img 
                    src={image} 
                    alt="" 
                    className={(id + " poke-card-img matched") }
                />:
                flipping ?
                <FlippingCard />:
                flippedOnUi ?
                <img 
                    src={image} 
                    alt="" 
                    className={(id + " poke-card-img") }
                /> :
                <img 
                    src={backGroundImage} 
                    alt="" className={(id + " poke-card-img") }
                />
            }
        </div>
    )
}

export default PokemonCard