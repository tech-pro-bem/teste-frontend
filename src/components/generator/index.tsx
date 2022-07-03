import { useState } from "react";
import { Generator } from "./styles";
import axios from 'axios';
import { Image } from "../image/styles";
import { getImageDog, getImageCat } from "../../services/api";
import { FaCat, FaDog } from 'react-icons/fa';

type Animal = {
  animal: string;
}

type ImageAnimals = string | undefined;

const GeneratorComponent = (props: Animal) => {
  const [imageCat, setImageCat] = useState<ImageAnimals>('')
  const [imageDog, setImageDog] = useState<ImageAnimals>('');

  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const randomNumber = () => Math.floor(Math.random() * 500) + 200;

  return (
    <Generator>
      <Image>
        <img
          src={props.animal === 'cachorro' ? imageDog : imageCat}
          alt={`Imagem de um ${props.animal}`}
        />
      </Image>
      <button onClick={async () => {
        setWidth(randomNumber());
        setHeight(randomNumber());
        {
          props.animal === 'cachorro' ?
          setImageDog(await getImageDog()) :
          setImageCat(await getImageCat(width, height));
        }
      }}>
        Gerar {props.animal}
      </button>
    </Generator>
  );
}

export default GeneratorComponent;
