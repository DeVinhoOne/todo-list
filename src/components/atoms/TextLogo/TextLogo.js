import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(Link)`
  position: relative;
  display: inline;
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.lightGray};

  @media (min-width: 550px) {
    font-size: calc(2rem + 1vw);
  }
`;

const InnerSpan = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: ${({ theme }) => theme.gradients.orangeToPink};
    z-index: -1;

    @media (min-width: 550px) {
      height: calc(40px + 2vw);
    }
  }
`;

const TextLogo = () => (
  <StyledLogo to="/">
    <InnerSpan>Todo</InnerSpan>-list
  </StyledLogo>
);

export default TextLogo;
