import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  margin: auto auto;
  height: 400px;
  width: 50vw;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SignUp = () => (
  <StyledWrapper>
    <Input placeholder="E-mail" />
    <Input placeholder="First name" />
    <Input placeholder="Password" />
    <Button>Sign Up</Button>
  </StyledWrapper>
);

export default SignUp;
