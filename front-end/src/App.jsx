import { useState, useEffect } from "react"
import styled from "styled-components"

import './App.css'

function App() {

    const [widthCat, setWidthCat] = useState(300);
    const [heightCat, setHeightCat] = useState(250);

    const [widthDog, setWidthDog] = useState(300);
    const [heightDog, setHeightDog] = useState(250);

    const [catImg, setCatImg] = useState(`https://placekitten.com/${widthCat}/${heightCat}`);
    const [dogImg, setDogImg] = useState(`https://place.dog/${widthDog}/${heightDog}`);

    useEffect(() => {
        setCatImg(`https://placekitten.com/${widthCat}/${heightCat}`);
    }, [widthCat || heightCat]);

    useEffect(() => {
        setDogImg(`https://place.dog/${widthDog}/${heightDog}`);
    }, [widthDog || heightDog]);
    
    function getRandomCat() {
        setWidthCat(Math.floor(Math.random() * (300 - 250 + 1)) + 250);
        setHeightCat(Math.floor(Math.random() * (250 - 200 + 1)) + 200);
    }

    function getRandomDog() {
        setWidthDog(Math.floor(Math.random() * (300 - 250 + 1)) + 250);
        setHeightDog(Math.floor(Math.random() * (250 - 200 + 1)) + 200);
    }

    return (
        <>
            <Title>Pet Generator</Title>

            <DivContainer>
                <Button onClick={getRandomCat}>Gerar Gatinho</Button>
                <Images src={catImg} alt="imagem de um gato"></Images>
                <Button onClick={getRandomDog}>Gerar Cachorrinho</Button>
                <Images src={dogImg} alt="imagem de um cachorro"></Images>
            </DivContainer>
            
        </>
    )
 
}

export default App;

const Title = styled.h1`
    text-align: center;
    color: #D6D5A8;
    font-size: 40px;
`

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    margin: 5px 0;
    font-size: 15px;
    width:200px;
    height: 50px;
    font-weight: bold;
    background-color: #51557E;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    box-shadow: 0 2px 2px #1a171795;
    &:hover {
        background-color: #604677;
    }
    &:active {
        width: 195px;
        height: 48px;
    }
`

const Images = styled.img`
    margin: 30px 0;
    border-radius: 10px;
`