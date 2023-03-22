import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Rubik, sans-serif;
    color: #D9D9D9;
    background-color: #0F0F0F;
    text-decoration: none;
  }

  h1 { 
    color: #D9D9D9;
  }
`

export default GlobalStyle;