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
    background: linear-gradient(160deg, #9A86A4 1%, rgba(43, 83, 162, 0.5) 100%);
    background-repeat: no-repeat;
    font-family: 'Inkfree';

    .App {
      height: 100vh;
      text-align: center;
      position: relative;
      padding-top: 50px;

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
  width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Pet Generator</h1>
        <Generators>
          <PetGenerator pet="cat" text={"click here if you're feeling sad"} />
          <PetGenerator pet="dog" text={"or here ;)"} />
        </Generators>
      </div>
    </>
  );
}

export default App;
