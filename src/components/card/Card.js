import React, { useState } from 'react'
import { TextButton } from '../button/style'
import { CardFooter, CardImage, CardInfo, CardLink, CardStructure } from './styles'

function Card({title}) {
    const [link, setLink] = useState("https://google.com/")

  return (
    <CardStructure>
        <CardImage />
        <CardInfo>
            <h2 className="card-title">{title}</h2>
            <p className="card-link">{link}</p>
        </CardInfo>
        <CardFooter>
            <TextButton type="button" theme="secondary">Copiar link</TextButton>
            <TextButton type="button" theme="primary">Gerar {title}</TextButton>
        </CardFooter>
    </CardStructure>
  )
}

export default Card