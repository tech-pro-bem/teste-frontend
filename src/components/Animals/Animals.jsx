import { getCats, getDogs } from "../../Services/fechApi";
import { Container } from "./styled";
import { FaSpinner } from "react-icons/fa";

export const Animals = ({ imagem, btnText, getMor, setLoading, loading }) => {
  const handleDog = () => {
    setLoading(true);
    getDogs().then((data) => {
      getMor(data);
      setLoading(false);
    });
  };

  const handleCat = () => {
    setLoading(true);
    getCats().then((data) => {
      getMor(data);
      setLoading(false);
    });
  };

  return (
    <Container>
      <div>
        <img src={imagem} alt="animal" />
      </div>
      <div>
        <button
          disabled={loading}
          onClick={() => {
            btnText === "Gerar Cachorro" ? handleDog() : handleCat();
          }}
        >
          {loading ? <FaSpinner size={20} /> : btnText}
        </button>
      </div>
    </Container>
  );
};
