import { getCats } from "../Services/fechApi";

export const Animals = ({ imagem, btnText, getMorCats }) => {
  const handleCat = () => {
    getCats().then((data) => {
      getMorCats(data);
    });
  };

  const handleDog = () => {
    console.log("dog");
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
