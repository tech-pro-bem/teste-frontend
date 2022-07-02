import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import { apiCat, apiDog } from '../../config/api'
import * as S from './styles'

export default function Home() {
  const [cat, setCat] = useState(null)
  const [dog, setDog] = useState(null)

  let firstRandom = Math.floor(Math.random() * 1001)
  let secondRandom = Math.floor(Math.random() * 1001)

  async function getCat() {
    let result = await apiCat.get(`/${firstRandom}/${secondRandom}`)

    let url = URL.createObjectURL(result.data)
    setCat(url)
  }

  async function getDog() {
    let result = await apiDog.get(`/${firstRandom}/${secondRandom}`)

    let url = URL.createObjectURL(result.data)
    setDog(url)
  }

  return (
    <S.Home>
      <h1>Gerador de animais</h1>

      <Button onClick={() => getCat()}>Gerar gatinhos</Button>

      {!cat ? (
        ''
      ) : (
        <Image>
          <img src={cat} alt="Gatinho" />
        </Image>
      )}

      <Button onClick={() => getDog()}>Gerar cachorrinhos</Button>

      {!dog ? (
        ''
      ) : (
        <Image>
          <img src={dog} alt="Cachorro" />
        </Image>
      )}
    </S.Home>
  )
}
