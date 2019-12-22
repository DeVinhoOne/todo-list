import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';

const StyledHeading = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.lightGray};
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledHeading>Witaj</StyledHeading>
      <Panel />
    </>
  </ThemeProvider>
);
export default Root;
