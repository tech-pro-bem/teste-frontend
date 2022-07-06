import { useEffect, useState } from "react";
import { getImageCat, getImageDog } from "../../utils/api";
import { Button, Container } from "./Styles";

interface ImageGeneratorProps{
  petType: string,
  width?: number,
  height?: number 
}

export function ImageGenerator({ petType,width,height }: ImageGeneratorProps) {
  const [ image, setImage ] = useState("")


  useEffect(() => {
    handleGetData(width, height)
  }, [])

  async function handleGetData(width?: number,height?:number) {
    if(petType === "cat") {
      handleGetImageCat(width,height)
    } 
    
    if(petType === "dog") {
      handleGetImageDog(width,height)
    }
  }

  async function handleGetImageCat(width?: number,height?:number) {
    const image = await getImageCat(width,height)
    setImage(image)
  }

  async function handleGetImageDog(width?: number,height?:number ) {
    const image = await getImageDog(width, height)
    setImage(image)
  }


  return (
    <Container>
      <Button onClick={() => handleGetData(width,height)}>{petType === "cat" ? "Gerar Gatinho" : "Gerar Cachorrinho"}</Button>
      <img src={image} alt="imagem de um pet" />
    </Container>
  )
}