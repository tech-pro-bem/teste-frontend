import { useFetch } from '@services/useFetch';
import { AxiosRequestConfig } from 'axios';
import { Background, Button, Image, Default } from './style';
import { CardProps } from '@shared/interfaces';

export function Card({ type, url }: CardProps) {
  const random = Math.random() * (600 - 300) + 300;
  const size = Math.round(random);

  const catURL = `${url}/${size}/${size}`;

  const options =
    type === 'dog'
      ? ({
          responseType: 'blob',
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'placedog.p.rapidapi.com',
          },
        } as AxiosRequestConfig)
      : ({
          responseType: 'blob',
        } as AxiosRequestConfig);

  const { imageURL, fetchingImage } = useFetch(
    type === 'dog' ? url : catURL,
    options,
  );

  async function handleGenerateImage() {
    await fetchingImage();
  }
  return (
    <Background>
      <h1>{type === 'dog' ? 'Cachorrinho' : 'Gatinho'}</h1>
      {imageURL ? <Image src={imageURL} alt="" /> : <Default />}
      <Button onClick={handleGenerateImage}>Gerar</Button>
    </Background>
  );
}
