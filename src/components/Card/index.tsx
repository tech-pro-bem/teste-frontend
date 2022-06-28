import { useEffect, useState } from "react"
import axios from "axios"
import {StyledCard} from "./styles"

interface CardProps{
    type: "dog" | "cat"
}

function Card({type}: CardProps){
    const [img, setImg] = useState<string>()

    function randomizeImg(){
        const random = Math.random() * (600 - 300) + 300
        const width = Math.round(random)
        const height = width + 100

        console.log(width, height);

        if(type === "dog"){
            setImg(`https://place.dog/${width}/${height}`)
        }else{
            axios.get(`http://placekitten.com/${width}/${height}`, {responseType: "blob"})
                .then(response => response.data)
                .then(data => {
                    const url = URL.createObjectURL(data)
                    setImg(url)
                })
        }
    }

    function playAudio(){
        const id = type === "dog" ? "dog-audio" : "cat-audio"
        const audio = document.getElementById(id) as HTMLAudioElement

        audio.play()
    }

    useEffect(() => randomizeImg(), [])

    return (
        <StyledCard
            onMouseEnter={playAudio}
        >
            <audio 
                id={
                    type === "dog" ? "dog-audio" : "cat-audio"
                } 
                src={
                    type === "dog" ? "dog.mp3" : "cat.mp3"
                }/>
            <img width="300" height="400" src={img} alt="" />
            <button>
                Gerar&nbsp; 
                {type === "dog" ? "Cachorrinho" : "Gatinho"}
            </button>
        </StyledCard>
    )
}

export {Card}