import { createGlobalStyle } from 'styled-components';
import { } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    
    :root{
        
        --background: #fcfafa;
        --text: #373737;
        --button-background: #A4B8C4;
        --hover-button-background: #C8D3D5;
    }
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 95.75%              /*por padrão o html possui tamanho de fonte de 16 px... essa porcentagem vai dar 15px*/ 
        }
        @media (max-width: 720px){
            font-size: 87.5%;               /* 14px */
        } 
    }
    body{
        background-color: var(--background);
        color: var(--text);
    }
    body, button{
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }

`