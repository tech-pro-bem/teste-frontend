import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  main {
    width: 100%;
    height: 100vh;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;

    > section {
      display: flex;
      justify-content: space-around;

      max-width: 100rem;
      width: 100%;

      margin: 0 2rem;

      height: 60rem;
      background-color: #ffff;
      
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }
`
