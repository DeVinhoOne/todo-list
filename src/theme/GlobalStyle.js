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
   }

   body {
      background-color: ${props => props.theme.darkBackground};
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
   }
`;

export default GlobalStyle;
