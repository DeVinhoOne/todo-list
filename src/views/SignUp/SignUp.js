import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  margin: auto auto;
  width: 50vw;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 60px;
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const createNewUser = () => {
    if (email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('Error!');
    }
  };

  return (
    <StyledWrapper>
      <StyledInput
        placeholder="E-mail"
        type="email"
        value={email}
        changeHandler={e => setEmail(e.target.value)}
      />
      <StyledInput
        placeholder="First name"
        type="text"
        value={firstName}
        changeHandler={e => setFirstName(e.target.value)}
      />
      <StyledInput
        placeholder="Password"
        type="password"
        value={password}
        changeHandler={e => setPassword(e.target.value)}
      />
      <Button submitNewUser={createNewUser}>Sign Up</Button>
    </StyledWrapper>
  );
};

export default SignUp;
