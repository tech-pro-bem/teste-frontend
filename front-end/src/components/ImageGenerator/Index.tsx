import { useEffect, useState } from "react";
import { Button, Container } from "./Styles";

interface ImageGeneratorProps{
  petType: string,
  width: number,
  height: number
}

export function ImageGenerator({ petType,width,height }: ImageGeneratorProps) {
  const [ selectPetType, setSelectPetType ] = useState("")

  useEffect(() => {
    if(selectPetType === "cat") {
      console.log("clicou em um gato")
    } else {
      console.log("clicou em um cachorro")
    }  
  }, [ selectPetType ])


  return (
    <Container>
      <Button onClick={() => setSelectPetType(petType)}>Gerar PET</Button>
      <img src="http://placekitten.com/200/300" alt="imagem de um pet" />
    </Container>
  )
}