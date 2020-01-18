import React from 'react';
import styled from 'styled-components';
import TextLink from '../../atoms/TextLink/TextLink';
import TextLogo from '../../atoms/TextLogo/TextLogo';

const StyledWrapper = styled.div`
  padding: 0 calc(10px + 2vw);
  /* padding-top: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media (min-width: 900px) {
    padding-top: 15px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: calc(120px + 3vw);

  @media (min-width: 550px) {
    width: calc(150px + 4vw);
  }

  @media (min-width: 950px) {
    width: calc(200px + 4vw);
  }
`;

const Navbar = () => (
  <StyledWrapper>
    <TextLogo />
    <LinksWrapper>
      <TextLink url="/signup">Sign Up</TextLink>
      <TextLink url="/login">Login</TextLink>
    </LinksWrapper>
  </StyledWrapper>
);

export default Navbar;
