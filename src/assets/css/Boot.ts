import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --desktop: 1440px;
    --font-roboto: 'Roboto', sans-serif;
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-white: #fff;
    --color-black: #000;
    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  }

  *{
    margin: 0; padding: 0;
    box-sizing: border-box;
  }

  *, input, button{
    font-family: var(---font-roboto)
  }

`;
