import { useState } from "react";
import axios from "axios";
import Styles from './ReusableComponent.module.css'
const ReusableComponent = ({url, animal }) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [image, setImage] = useState("");


  async function getCat() {
    const response = axios
      .get(`${url}/${width}/${height}`, { responseType: "blob" })
      .then((response) => {
        setImage(URL.createObjectURL(response.data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }


  return (
<>
    <div className={Styles['container']}>

    <h1 className={Styles['h1']}>Pet Generator</h1>
      <button
        className={Styles['button']}
        onClick={() => {
          setWidth(Math.floor(Math.random() * 500) + 200);
          setHeight( Math.floor(Math.random() * 500)+ 200);
          getCat()
        }}
      >
        Gerar {animal}
      </button>
      <img className={Styles['image']} src={image}></img>
    

    </div>
    </>
  );
};

export default ReusableComponent;