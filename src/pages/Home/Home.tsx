import { useState } from "react";
import { PawPrint } from 'phosphor-react';

import { fetchCats, fetchDogs } from "../../services/api";
import { Animal } from "../../components/Animal";
import { Button } from "../../components/Button";

import { MainContainer } from "./style";

export function Home() {
  const [animal, setAnimal] = useState<string>('');
  const [type, setType] = useState<string>('');

  async function handleGenerateAnimal(event: { currentTarget: { name: string } }) {
    const { name } = event.currentTarget;

    if (name === "cat") {
      const cat = await fetchCats();
      setAnimal(cat);
    } else if (name === "dog") {
      const dog = await fetchDogs();
      setAnimal(dog);
    }
    setType(name);
  }

  return (
    <MainContainer>
      <div>
        <h1>
          <PawPrint size={32} alt="paw print icon" />
          Pet Generator
        </h1>
        <Button
          name="cat"
          onClick={handleGenerateAnimal}
        />
        <Button
          name="dog"
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
