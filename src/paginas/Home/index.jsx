import React from "react";
import "./style.css";
import Logo from "../../asset/logo.svg";
import GeneratorPets from "../../componetes/generatorPets";

export default function Home() {
  return (
    <div className="ContainerHome">
      <div className="ContainerPet">
        <div className="Header">
          <h2>Gatos</h2>
          <h1>Pet Generator</h1>
          <h2>Cães</h2>
        </div>
        <div className="ContentPet">
          <GeneratorPets status="gatos" api="http://placekitten.com" />
          <GeneratorPets status="caes" api="https://place.dog" />
        </div>
        <div className="TechProBem">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
      </div>
    </div>
  );
}
