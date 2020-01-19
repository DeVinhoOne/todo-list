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

const StyledLogout = styled.button`
  background-color: transparent;
  border: none;
  height: 70px;
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: 0.3px;
  text-decoration: none;
  color: ${({ theme }) => theme.pink};
  cursor: pointer;

  @media (min-width: 550px) {
    font-size: calc(1.2rem + 1vw);
  }
`;

const Navbar = ({ isLoggedIn, logoutUser }) => {
  let links = (
    <LinksWrapper>
      <TextLink url="/signup">Sign Up</TextLink>
      <TextLink url="/login">Login</TextLink>
    </LinksWrapper>
  );

  if (isLoggedIn) {
    links = (
      <LinksWrapper>
        <TextLink url="/app">App</TextLink>
        <StyledLogout onClick={logoutUser}>Logout</StyledLogout>
      </LinksWrapper>
    );
  }
  return (
    <StyledWrapper>
      <TextLogo />
      {links}
    </StyledWrapper>
  );
};

export default Navbar;
