import { useState } from "react";
import axios from "axios";
import Styles from "./ReusableComponent.module.css";

const ReusableComponent = ({ url, animal }) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [image, setImage] = useState("");
  const [imageDog, setImageDog] = useState("");

  async function getCat() {
    const response = axios
      .get(`${url}/${width}/${height}`, { responseType: "blob" })
      .then((response) => {
        setImage(URL.createObjectURL(response.data));
        console.log("houve exito na sua conexão", response.status);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  async function getDog() {
    const response = await axios
      .get(`${url}`, {
        headers: {
          "X-RapidAPI-Key":
            "bcd410e343msh4d5772c71f54d4dp1b8663jsna8fba6394842",
          "X-RapidAPI-Host": "placedog.p.rapidapi.com",
        },
        responseType: "blob",
      })
      .then((response) => {
        setImageDog(URL.createObjectURL(response.data));
        console.log("houve exito na sua conexão", response.status);
      })
      .catch((err) => {
        console.log("houve um erro", err);
      });
  }

  return (
    <>
      <div className={Styles["container"]}>
        <h1 className={Styles["h1"]}>{animal} Generator</h1>
        <button
          className={Styles["button"]}
          onClick={() => {
            setWidth(Math.floor(Math.random() * 500) + 200);
            setHeight(Math.floor(Math.random() * 500) + 200);
            {
              animal == "Gatinho" ? getCat()  : getDog();
            }
          }}
        >
          Gerar {animal}
        </button>
        <img
          className={Styles["image"]}
          src={animal == "Gatinho" ? image : imageDog}
        ></img>
      </div>
    </>
  );
};

export default ReusableComponent;
