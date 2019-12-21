import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import AddButton from '../components/atoms/AddButton/AddButton';

const StyledHeading = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.lightGray};
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledHeading>Witaj</StyledHeading>
      <AddButton>Add</AddButton>
    </>
  </ThemeProvider>
);
export default Root;
