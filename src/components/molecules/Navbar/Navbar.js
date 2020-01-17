import React from 'react';
import styled from 'styled-components';
import TextLink from '../../atoms/TextLink/TextLink';
import TextLogo from '../../atoms/TextLogo/TextLogo';

const StyledWrapper = styled.div`
  padding: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100vw;
`;

const Navbar = () => (
  <StyledWrapper>
    <TextLogo>Todo-list</TextLogo>
    <LinksWrapper>
      <TextLink url="/signup">Sign Up</TextLink>
      <TextLink url="/login">Login</TextLink>
    </LinksWrapper>
  </StyledWrapper>
);

export default Navbar;
