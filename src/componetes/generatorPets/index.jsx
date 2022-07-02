import React from "react";
import axios from "axios";
import { useState } from "react";
import "./style.css";

export default function GeneratorPets({ api, status }) {
  const [randomWidth, setRandomWidth] = useState(300);
  const [randomHeight, setRandomHeight] = useState(200);

  function generateRandomNumbers(min, max) {
    setRandomWidth(Math.floor(Math.random() * (max - min) + min));

    setRandomHeight(Math.floor(Math.random() * (max - min) + min));
  }
  return (
    <div className="ContainerGenerator">
      <div className="BoxGenetator">
        <div className="BoxPet">
          <img
            className="ImgPet"
            src={`${api}/${randomWidth}/${randomHeight}`}
          />
        </div>
      </div>

      <div
        className={status === "gatos" ? "BtnPet Gatos" : "BtnPet Caes"}
        onClick={() =>
          status === "gatos"
            ? generateRandomNumbers(200, 300)
            : generateRandomNumbers(300, 400)
        }
      >
        <h1>{status === "gatos" ? "Gerar Gatos" : "Gerar Cães"}</h1>
      </div>
    </div>
  );
}
