import axios from 'axios'

export async function getImageCat() {

  let number = 490 + Math.floor(Math.random() * 9)
  
  const response = await axios.get(`https://placekitten.com/${number}/${number}`,
    {
      responseType: "blob"
    })

  const image = response.data

  return URL.createObjectURL(image)
}

export async function getImageDog() {

  const response = await axios.get(`/500/500`,
    {
      responseType: "blob"
    })

  const image = response.data

  return URL.createObjectURL(image)
}