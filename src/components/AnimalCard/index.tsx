import { useEffect, useState } from 'react'
import axios from 'axios'

import { Animal, Variant } from '../../types'

import { ImageContainer, Image, Button, LoaderFallback } from './styled'

type AnimalCardProps = {
  animal: `${Animal}`
  variant?: `${Variant}`
}

const animalTitle = {
  [Animal.Cat]: 'gatinho',
  [Animal.Dog]: 'cachorrinho'
}

export default function AnimalCard({
  animal,
  variant = Variant.PRIMARY
}: AnimalCardProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const [isLoading, setisLoading] = useState<boolean>(true)
  const [refetchIndex, setRefetchIndex] = useState<number>(0)

  const refetch = () => setRefetchIndex(prev => prev + 1)

  useEffect(() => {
    setisLoading(true)

    axios
      .get('/api/place', {
        params: {
          service: animal
        },
        responseType: 'blob'
      })
      .then(res => {
        setImageUrl(URL.createObjectURL(res.data))
      })
      .finally(() => {
        setisLoading(false)
      })
  }, [animal, refetchIndex])

  return (
    <div>
      {isLoading || !imageUrl ? (
        <LoaderFallback />
      ) : (
        <>
          <ImageContainer variant={variant}>
            <Image src={imageUrl} alt={`Foto de um ${animalTitle[animal]}`} />
          </ImageContainer>
        </>
      )}
      <Button onClick={refetch} disabled={isLoading}>
        Gerar {animalTitle[animal]}
      </Button>
    </div>
  )
}
