import { useEffect, useState } from "react"

import { catApi } from "../../services/apis/catApi.js"
import { dogApi } from "../../services/apis/dogApi.js"
import { Container, Button } from "./styles"

interface CardProps {
  type: "dog" | "cat"
}

export function Card({ type }: CardProps) {
  const [image, setImage] = useState("")

  async function fetchCatImage() {
    const imageHeight = Math.round(Math.random()*1000)
    const imageWidth = Math.round(imageHeight*1.5)

    try {
      const { data } = await catApi.get(`/${imageHeight}/${imageWidth}`,{
        responseType: "blob"
      })
      
      setImage(URL.createObjectURL(data))
      
    } catch (error) {
      alert("Erro ao buscar imagem")
      console.log(error)
    }

  }

  async function fetchDogImage() {
    try {
      const { data } = await dogApi.get("", {
        responseType: "blob",
        headers: {
          "X-RapidAPI-Key": "bcd410e343msh4d5772c71f54d4dp1b8663jsna8fba6394842",
          "X-RapidAPI-Host": "placedog.p.rapidapi.com"
        }
      })
      
      setImage(URL.createObjectURL(data))

    } catch (error) {
      console.log(error)
      alert("Erro ao buscar imagem")
    }
  }

  useEffect(() => {
    type === "cat"
    ? fetchCatImage()
    : fetchDogImage()
  }, [])

  return (
    <Container>
      {
        type === "cat" 
        ? <Button onClick={() => fetchCatImage()}>Gerar Gatinho</Button>
        : <Button onClick={() => fetchDogImage()}>Gerar Cachorrinho</Button>
      }
      <img src={image} alt={type === "cat" ? "Imagem de um gatinho" : "Imagem de um cachorrinho"} />
    </Container>
  )
}