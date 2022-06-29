import axios from "axios"
import { generateRandomNumber } from "./generateRandomNumber"

export async function getImageCat(weight:number = generateRandomNumber(), height:number = generateRandomNumber()) {
  const response = await axios.get(`https://placekitten.com/${weight}/${height}`, { responseType: "blob" })
  const image = response.data

  return URL.createObjectURL(image)
}

export async function getImageDog(weight:number=200, height: number=300) {
  const response = await axios.get(`https://placedog1.p.rapidapi.com/${weight}/${height}`, {
    headers: {
      'X-RapidAPI-Key': '5f8cd57facmsh4eed63a4e524821p1c9f51jsncbaf63b8c31a', 
      'X-RapidAPI-Host': 'placedog1.p.rapidapi.com'
    },
    responseType: "blob"
  })

  const image = response.data

  return URL.createObjectURL(image)
}

// X-RapidAPI-Key deveria esta em uma variavel de ambiente, porém pra facilitar pra quem vai rodar o projeto, coloquei no código mesmo.