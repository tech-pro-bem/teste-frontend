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
    min-height: 100vh;

    background-color: #F8F8FF;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > h1 {
      text-align: center;
      margin-top: 6rem;
      margin-bottom: 4rem;
      font-size: 3rem;
      color: #00BFFF;
    }

    > section {
      
      max-width: 120rem;
      width: 100%;
      margin: 0 auto;
      
      min-height: 60rem;
      
      > div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
  
        width: 100%;
        height: 100%;
      }
      
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }
`
