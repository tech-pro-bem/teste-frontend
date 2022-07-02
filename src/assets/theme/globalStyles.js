import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: #F7F9FA;
    font-family: 'Nunito', sans-serif;
  }
`
export default GlobalStyle;
