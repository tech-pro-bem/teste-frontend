import {useRef} from "react"
import { PetGeneratorContainer } from "./styles";

interface PetGeneratorProps {
    url: string,
    title: string,
    width: string,
    height: string
}

export function PetGenerator(props: PetGeneratorProps) {
    const { url, title, height, width } = props;
    const newUrl = `${url}/${width}/${height}`;
    console.log(newUrl)
    const imageRef = useRef<HTMLImageElement>(null);

    function handleClick() {
        let timestamp = new Date().getTime(); 
        if(imageRef.current !== null){
            imageRef.current.src = `${newUrl}?t=${timestamp}`
        }       
    }

    return (
        <PetGeneratorContainer>
            <img src={newUrl} ref={imageRef} alt="imagem de pet" />
            <button onClick={handleClick}>{title}</button>
        </PetGeneratorContainer>
    )
}