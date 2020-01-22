import React, { useState } from 'react';
import styled from 'styled-components';
import 'firebase/auth';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const StyledForm = styled.form`
  margin: auto auto;
  width: 70vw;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 60px;
`;

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledForm onSubmit={e => loginUser(e, email, password)}>
      <StyledInput placeholder="E-mail" type="e-mail" value={email} changeHandler={e => setEmail(e.target.value)} />
      <StyledInput
        placeholder="Password"
        type="password"
        value={password}
        changeHandler={e => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </StyledForm>
  );
};

export default Login;
