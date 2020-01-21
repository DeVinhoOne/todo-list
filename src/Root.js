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
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, []);

  const loginUser = (e, email, password) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signupUser = (e, email, password, passwordConfirm) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const logoutUser = () => {
    if (isLoggedIn) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('User Logged Out!');
        })
        .catch(() => {
          console.log('Logout Error!');
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
      <Switch>
        <Route path="/" exact children={<HomePage />} />
        <Route path="/login">
          {isLoggedIn ? (
            <Redirect to="/app" />
          ) : (
            <Login loginUser={(e, email, password) => loginUser(e, email, password)} />
          )}
        </Route>
        <Route path="/signup">
          {isLoggedIn ? (
            <Redirect to="/app" />
          ) : (
            <SignUp
              signupUser={(e, email, password, passwordConfirm) => signupUser(e, email, password, passwordConfirm)}
            />
          )}
        </Route>
        {isLoggedIn ? <Route path="/app" children={<App />} /> : <Redirect to="/login" />}
      </Switch>
    </ThemeProvider>
  );
};

firebase.initializeApp(firebaseConfig);
export default Root;
