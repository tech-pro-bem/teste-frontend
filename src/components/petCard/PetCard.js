import { useEffect, useState } from 'react'
import { CardFooter, CardImageContainer, CardInfo, CardStructure } from './styles'
import Button from '../button/Button'
import { copyTextToClipboard } from '../../services/utils/copyTextToClipboard'
import { getCatPic, getDogPic } from '../../services/api/requestHandlers'

const linkCopyInit = {
  type: "",
  message: ""
}

function PetCard({title, petType}) {
  const [link, setLink] = useState("https://google.com/")
  const [copyLinkStatus, setCopyLinkStatus] = useState(linkCopyInit)

  const petPics = {
    cat: getCatPic,
    dog: getDogPic
  }

  const getPet = async () => {
    const pic = await petPics[petType]()
    setLink(pic)
  }

  const handleCopyLink = () => {
    try {
      copyTextToClipboard(link)
      setCopyLinkStatus({
        type: "success",
        message: "Link copiado!"
      })

      setTimeout(() => {
        setCopyLinkStatus(linkCopyInit)
      }, 3000);

    } catch(error) {
      setCopyLinkStatus({
        type: "error",
        message: "Erro ao copiar link"
      })

      setTimeout(() => {
        setCopyLinkStatus(linkCopyInit)
      }, 3000);
    }
  }

  useEffect(() => {
    getPet()
  }, [])
  

  return (
    <CardStructure>
        <CardImageContainer>
          <img src={link} alt={title} className="card-pic"/>
        </CardImageContainer>
        <CardInfo>
            <h2 className="card-title">{title}</h2>
            <p className="card-link">{link}</p>
            <p className={`copy-link copy-link-${copyLinkStatus.type}`}>{copyLinkStatus.message}</p>
        </CardInfo>
        <CardFooter>
            <Button type="button" theme="secondary" action={handleCopyLink}>Copiar link</Button>
            <Button type="button" theme="primary" action={getPet}>Gerar {title}</Button>
        </CardFooter>
    </CardStructure>
  )
}

export default PetCard