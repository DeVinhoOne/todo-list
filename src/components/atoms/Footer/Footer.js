import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const StyledParagraph = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.lightGray};
  text-align: center;
  @media (min-width: 670px) {
    font-size: 2rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.orange};
  cursor: pointer;
`;

const Footer = () => (
  <StyledWrapper>
    <StyledParagraph>
      Created by Dawid Łacheta. Visit my repo on{' '}
      <StyledLink
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/DeVinhoOne/todo-list"
      >
        GitHub
      </StyledLink>
    </StyledParagraph>
  </StyledWrapper>
);

export default Footer;
