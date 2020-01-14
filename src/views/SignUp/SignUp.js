import React from 'react';
import styled from 'styled-components';
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

const SignUp = () => (
  <StyledWrapper>
    <StyledInput placeholder="E-mail" />
    <StyledInput placeholder="First name" />
    <StyledInput placeholder="Password" />
    <Button>Sign Up</Button>
  </StyledWrapper>
);

export default SignUp;
