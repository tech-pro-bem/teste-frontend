import Image from "./Image"
import Button from "./Button"
import { useEffect, useState } from "react"
import styled from "styled-components";
import { keyframes } from "styled-components";

const Container = ({ getImageAnimal, animal, changeCounter }) => {

    const [image, setImage] = useState('')
    const [ fade, setFade ] = useState('')
    
    useEffect(() => {
        handleImage()
    }, [])
    
    async function handleImage() {
        const image = await getImageAnimal()
        changeCounter()
        setImage(image)
    }

    async function changeFade() {
        setFade(fadeIn)
    }

    return (
        <StyledContainer>
            <Image image={image} alt={animal} fade={fade} />
            <Button animal={animal} onClick={handleImage} setFade={changeFade} />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    background: rgba(0,0,0,0.6);
    padding: 45px 45px 0 45px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
    border-radius: 20px;
    box-shadow: 10px 10px 10px;
`

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

export default Container