import { useState } from "react";
import styles from '../Fetch/styles.module.scss';

interface FetchImageProps {
    imageURL: string
    animalType: string
}

export function FetchImage({imageURL, animalType}: FetchImageProps){
  const [randomWidthNumber, setRandomWidthNumber] = useState(300)
  const [randomHeightNumber, setRandomHeightNumber] = useState(200)

    function getRandomNumbers(){
      function randomWidthNumber(min: number, max:number) { 
        setRandomWidthNumber( Math.floor(Math.random() * (max - min) + min));
      } 

      randomWidthNumber(300, 400)

      function randomHeightNumber(min: number, max:number) { 
        setRandomHeightNumber( Math.floor(Math.random() * (max - min) + min));
      } 

      randomHeightNumber(200, 300)
    }

    return (
        <div className={styles.div}>
            <button className={styles.button} onClick={getRandomNumbers}>Gerar {animalType}</button>
            <img className={styles.img} src={`${imageURL}/${randomWidthNumber}/${randomHeightNumber}`} alt={`Foto de ${animalType}`} />
        </div>
    )
} 