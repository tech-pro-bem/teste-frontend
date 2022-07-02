import { useState } from "react";
import { Generator } from "./styles";
import axios from 'axios';

type Animal = {
  animal: string;
}

const GeneratorComponent = (props: Animal) => {
  const [imageCat, setImageCat] = useState<string>('')
  const [imageDog, setImageDog] = useState<string>('');

  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const randomNumber = () => Math.floor(Math.random() * 500) + 200;

  const getImageDog = async () => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breeds/image/random`,
      );
      setImageDog(response.data.message);
  
    } catch(e) {
      console.warn(`ERROR: ${e}`);
    }
  };
  
  const getImageCat = async (width: number, height: number) => {
    try {
      const response = await axios.get(
        `http://placekitten.com/${width}/${height}`,
        {responseType: "blob" }
      );
      setImageCat(URL.createObjectURL(response.data));
  
    } catch(e) {
      console.warn(`ERROR: ${e}`);
    }
  };

  return (
    <Generator>
      <img
        src={props.animal === 'cachorro' ? imageDog : imageCat}
        alt={`Imagem de um ${props.animal}`}
      />
      <button onClick={() => {
        setWidth(randomNumber());
        setHeight(randomNumber());
        {
          props.animal === 'cachorro' ? getImageDog() : getImageCat(width, height)
        }
      }}>
        Gerar {props.animal}
      </button>
    </Generator>
  );
}

export default GeneratorComponent;
