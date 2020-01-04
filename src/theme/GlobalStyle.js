import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: 'Lato', sans-serif;
   }

   html {
      font-size: 62.5%;
      height: 100%;
   }

   body {
      background-color: ${props => props.theme.darkBackground};
      font-size: 1.6rem;
      height: 100%;
   }

   #root {
      height: 100%;
      display: flex;
      flex-direction: column;
   }
`;

export default GlobalStyle;
