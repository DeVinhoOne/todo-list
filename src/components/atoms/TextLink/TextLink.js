import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: 0.3px;
  text-decoration: none;
  color: ${({ theme }) => theme.pink};

  @media (min-width: 550px) {
    font-size: calc(1.2rem + 1vw);
  }
`;

const TextLink = ({ children, url }) => <StyledLink to={url}>{children}</StyledLink>;

export default TextLink;
