import PetGenerator from "./components/PetGenerator";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: 'Inkfree';
    src: local("Inkfree"),
    url("./fonts/Inkfree.ttf") format("truetype");
  }

  * {
      box-sizing: border-box;   
      margin: 0;
      padding: 0; 
  }

  body {
    .App {
      background: linear-gradient(160deg, #9A86A4 1%, rgba(43, 83, 162, 0.5) 100%);
      background-repeat: no-repeat;
      font-family: 'Inkfree';
      min-height: 100vh;
      text-align: center;      
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        margin-bottom: 100px;
        color: white;
        text-shadow: 0px 9px 5px rgba(0, 0, 0, 0.5);
        font-weight: 400;
        font-size: 60px;
      }
    }
  }
`;

const Generators = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin-bottom: 50px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Pet Generator</h1>
        <Generators>
          <PetGenerator
            pet="cat"
            text={"click here if you're feeling sad"}
            width="350"
            height="350"
          />
          <PetGenerator
            pet="dog"
            text={"or here ;)"}
            width="350"
            height="350"
          />
        </Generators>
      </div>
    </>
  );
}

export default App;
