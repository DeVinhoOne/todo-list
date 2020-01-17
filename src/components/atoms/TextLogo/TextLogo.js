import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  display: inline;
  font-size: 2.7rem;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.lightGray};

  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 50px;
    background: ${({ theme }) => theme.gradients.orangeToPink};
    z-index: -1;
  }
`;

const TextLogo = ({ children }) => <StyledLink to="/">{children}</StyledLink>;

export default TextLogo;
