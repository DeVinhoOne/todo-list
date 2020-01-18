import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const StyledForm = styled.form`
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
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const createNewUser = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StyledForm onSubmit={createNewUser}>
      <StyledInput placeholder="E-mail" type="email" value={email} changeHandler={e => setEmail(e.target.value)} />
      <StyledInput
        placeholder="Password"
        type="password"
        value={password}
        changeHandler={e => setPassword(e.target.value)}
      />
      <StyledInput
        placeholder="Confirm password"
        type="password"
        value={passwordConfirm}
        changeHandler={e => setPasswordConfirm(e.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </StyledForm>
  );
};

export default SignUp;
