import React from "react";

import "./style.css";

export default function GeneratorPets(status) {
  return (
    <div className="ContainerGenerator">
      <div className="BoxGenetator">
        {/* <div className="BoxPet"></div> */}
        <div
          className={status === "gatos" ? "BoxPet Gatos" : "BoxPet Caes"}
        ></div>
      </div>

      <div className={status === "gatos" ? "ButPet Gatos" : "ButPet Caes"}>
        <h1>{status === "gatos" ? "Gerar Gatos" : "Gerar Cães"}</h1>
      </div>
    </div>
  );
}
