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
        <PetGenerator url="https://place.dog/200/200" title="Gerar cachorrinho" />
        <PetGenerator url="http://placekitten.com/200/200" title="Gerar gatinho" />
      </PetGeneratorContainer>
      <Footer />
    </HomeContainer>
  );
}


