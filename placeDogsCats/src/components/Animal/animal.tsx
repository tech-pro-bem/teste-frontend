import useIndex from '../../hooks/useIndex';
import { catFetch, dogFetch } from '../../lib/server';


interface AnimalProps {
  cat?: string,
  dog?: string

}


export default function Animal({ cat, dog }: AnimalProps) {
  const { dogImage, setDogImage, catImage,
    setCatImage, setLoading } = useIndex();

  const handleClickDog = () => {
    setLoading(true);
    dogFetch().then((value) => {
      setDogImage(value);
      setLoading(false);
    });
  };

  const handleClickCat = () => {
    setLoading(true);
    catFetch().then((value) => {
      setCatImage(value);
      setLoading(false);
    });
  };

  return (
    <>
      <section className="tw-flex tw-flex-col tw-m-2 tw-justify-center">
        <div className="tw-flex tw-justify-center">
          <img src={cat === 'Gato' ? catImage : dogImage}
            alt={cat === 'Gato' ? 'Imagem de um gato.' : 'Imagem de um cachorro.'}
            className="tw-p-2 tw-w-60 tw-h-40"
          />

        </div>
        <div className="tw-flex tw-justify-center">
          <button type="button"
            onClick={cat === 'Gato' ? handleClickCat : handleClickDog}
            className="tw-rounded-md tw-p-1.5 tw-w-24 tw-cursor-pointer tw-bg-yellow-500 tw-text-zinc-100 tw-border-transparent hover:tw-text-zinc-700 tw-transition-colors"
          >
            Gerar
            {' '}
            {cat || dog}
          </button>

        </div>

      </section>
    </>
  )
}

