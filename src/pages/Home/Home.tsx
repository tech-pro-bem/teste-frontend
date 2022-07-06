import { useState } from "react";
import { PawPrint } from 'phosphor-react';

import { fetchCats, fetchDogs } from "../../services/api";
import { Animal } from "../../components/Animal";
import { Button } from "../../components/Button";

import { MainContainer } from "./style";

export function Home() {
  const [animal, setAnimal] = useState<string>('');
  const [type, setType] = useState<string>('');

  async function handleGenerateAnimal(event: React.MouseEvent<HTMLButtonElement>) {
    const { value } = event.currentTarget;

    if (value === "cat") {
      const cat = await fetchCats();
      setAnimal(cat);
    } else if (value === "dog") {
      const dog = await fetchDogs();
      setAnimal(dog);
    }
    setType(value);
  }

  return (
    <MainContainer>
      <div>
        <h1>
          <PawPrint size={32} alt="paw print icon" />
          Pet Generator
        </h1>
        <Button
          value="cat"
          children="Gerar Gatinho"
          onClick={handleGenerateAnimal}
        />
        <Button
          value="dog"
          children="Gerar Cachorrinho"
          onClick={handleGenerateAnimal}
        />
      </div>
      <Animal
        source={animal}
        description={type}
      />
    </MainContainer>
  );
}
