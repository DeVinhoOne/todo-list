import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase/firebaseConfig';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
// import Footer from './components/atoms/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import App from './views/App/App';

const StyledLink = styled(Link)`
  position: fixed;
  top: 50px;
  left: 60px;
  font-size: 4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.lightGray};
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLink to="/">Home</StyledLink>
      <Switch>
        <Route path="/" exact children={<HomePage />} />
        <Route path="/login" children={<Login />} />
        <Route path="/signup" children={<SignUp />} />
        <Route path="/app" children={<App />} />
      </Switch>
    </ThemeProvider>
  );
};

firebase.initializeApp(firebaseConfig);
export default Root;
