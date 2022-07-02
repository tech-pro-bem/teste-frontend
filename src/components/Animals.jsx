import { getCats, getDogs } from "../Services/fechApi";

export const Animals = ({ imagem, btnText, getMor }) => {
  const handleCat = () => {
    getCats().then((data) => {
      getMor(data);
    });
  };

  const handleDog = () => {
    getDogs().then((data) => {
      getMor(data);
    });
  };

  return (
    <div>
      <div>
        <img src={imagem} alt="cat" />
      </div>
      <div>
        <button
          onClick={() => {
            btnText === "Gerar Gatinho" ? handleCat() : handleDog();
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};
