import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  margin: auto auto;
  height: 320px;
  width: 50vw;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Login = () => (
  <StyledWrapper>
    <Input placeholder="E-mail" />
    <Input placeholder="Password" />
    <Button>Login</Button>
  </StyledWrapper>
);

export default Login;
