import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PetGenerator } from "../../components/PetGenerator";
import { GlobalStyle } from "../../styles/global";
import { PetGeneratorContainer, HomeContainer } from "./styles";


export function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Header />
      <PetGeneratorContainer>
        <PetGenerator url="https://place.dog" title="Gerar cachorrinho" width="200" height="200" />
        <PetGenerator url="http://placekitten.com" title="Gerar gatinho" width="200" height="200" />
      </PetGeneratorContainer>
      <Footer />
    </HomeContainer>
  );
}


