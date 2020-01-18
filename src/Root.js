import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase/firebaseConfig';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/molecules/Navbar/Navbar';
import HomePage from './views/HomePage/HomePage';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import App from './views/App/App';

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is currently LOGGED IN', user);
        setIsLoggedIn(true);
      } else if (!user) {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('User Logged Out!');
      })
      .catch(() => {
        console.log('Logout Error!');
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Redirect to="/app" /> : <HomePage />}
        </Route>
        <Route path="/login">{isLoggedIn ? <Redirect to="/app" /> : <Login />}</Route>
        <Route path="/signup">{isLoggedIn ? <Redirect to="/app" /> : <SignUp />}</Route>
        <Route path="/app">{isLoggedIn ? <App /> : <Redirect to="/" />}</Route>
      </Switch>
    </ThemeProvider>
  );
};

firebase.initializeApp(firebaseConfig);
export default Root;
