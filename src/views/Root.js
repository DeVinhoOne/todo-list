import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Panel />
    </>
  </ThemeProvider>
);
export default Root;
