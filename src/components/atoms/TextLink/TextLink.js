import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: 0.3px;
  text-decoration: none;
  color: ${({ theme }) => theme.pink};

  @media (min-width: 360px) {
    /* font-size: calc(2.5rem + 2vw); */
  }

  @media (min-width: 1100px) {
    /* font-size: calc(2.8rem + 2vw); */
  }

  @media (min-width: 1600px) {
    /* font-size: 4rem; */
  }
`;

const TextLink = ({ children, url }) => <StyledLink to={url}>{children}</StyledLink>;

export default TextLink;
