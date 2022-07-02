import { useState, useEffect } from "react"
import styled from "styled-components"

import './App.css'

function App() {

    return (
        <>
            <Title>Pet Generator</Title>

            <DivContainer>
                <Button>Gerar Gatinho</Button>
                <Images alt="imagem de um gato"></Images>
                <Button>Gerar Cachorrinho</Button>
                <Images alt="imagem de um cachorro"></Images>
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