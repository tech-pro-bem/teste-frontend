import Animal from "../components/Animal/animal";
import { catFetch, dogFetch } from '../lib/server';
import { useEffect } from "react";
import useIndex from "../hooks/useIndex";

export default function App() {
  const { catAndDog, loading,
    setDogImage, setCatImage } = useIndex();

  useEffect(() => {
    const dogInitialImage = () => {
      dogFetch().then((value) => {
        setDogImage(value);
      });
    };

    const catInitialImage = () => {
      catFetch().then((value) => {
        setCatImage(value);
      });
    };

    catInitialImage();
    dogInitialImage();

  }, []);

  return (
    <main className="tw-flex tw-justify-center tw-flex-col">
      <h1 className="tw-flex tw-justify-center tw-mt-8">Cats and Dogs</h1>
      <p className="tw-flex tw-justify-center tw-m-2 tw-pb-8">Imagens Aleatórias de Gatinhos e Cachorrinhos</p>
      <section className="tw-flex md:tw-flex-row tw-justify-center tw-flex-col">
        <div>
          <Animal cat={catAndDog.cat} />
        </div>
        <div>
          <Animal dog={catAndDog.dog} />
        </div>
      </section>
    </main>
  )

}