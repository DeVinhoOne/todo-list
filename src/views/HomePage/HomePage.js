import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/images/hero-image.svg';

const StyledWrapper = styled.div`
  margin: auto 0;
  padding: 0 calc(10px + 2vw);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledHeroText = styled.h1`
  color: ${({ theme }) => theme.lightGray};
  font-size: 2.8rem;
  letter-spacing: 0.3px;

  @media (min-width: 360px) {
    font-size: calc(2.5rem + 2vw);
  }

  @media (min-width: 1100px) {
    font-size: calc(2.8rem + 2vw);
  }

  @media (min-width: 1600px) {
    font-size: 8rem;
  }

  @media (min-width: 1921px) {
    font-size: calc(3rem + 3vw);
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.pink};
`;

const StyledStart = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background: ${({ theme }) => theme.gradients.orangeToPink};
    z-index: -1;

    @media (min-width: 360px) {
      height: calc(45px + 1vw);
    }

    @media (min-width: 550px) {
      height: calc(45px + 1.3vw);
    }

    @media (min-width: 760px) {
      height: calc(45px + 2.5vw);
    }

    @media (min-width: 950px) {
      height: calc(45px + 2.8vw);
    }

    @media (min-width: 1100px) {
      height: calc(45px + 3.2vw);
    }
  }
`;

const StyledImage = styled.img`
  margin-top: 30px;
  width: 80%;
  max-width: 680px;
  align-self: flex-end;

  @media (min-width: 360px) {
    width: 75%;
  }

  @media (min-width: 550px) {
    flex-direction: row;
    align-self: center;
    width: 60%;
  }

  @media (min-width: 750px) {
    width: 45%;
  }

  @media (min-width: 1921px) {
    max-width: 1200px;
    width: 50%;
  }
`;

const HomePage = () => (
  <StyledWrapper>
    <StyledHeroText>
      Welcome anonymous,
      <br /> <StyledSpan>Sign up</StyledSpan> or <StyledSpan>Login</StyledSpan>
      <br /> to <StyledStart>Start.</StyledStart>
    </StyledHeroText>
    <StyledImage src={HeroImage} alt="" />
  </StyledWrapper>
);

export default HomePage;
