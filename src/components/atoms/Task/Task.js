import React from 'react';
import styled from 'styled-components';
import DeleteButton from '../DeleteButton/DeleteButton';

const StyledWrapper = styled.div`
  padding: 10px;
  position: relative;
  margin-top: 25px;
  width: 70vw;
  min-height: 60px;
  background: linear-gradient(270deg, hsl(346, 100%, 63%) 0%, hsl(9, 100%, 58%) 100%);
  display: flex;
  align-items: center;
  @media (min-width: 380px) {
    margin-top: 35px;
  }
  @media (min-width: 670px) {
    width: 500px;
  }
  @media (min-width: 1000px) {
    width: 650px;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.lightGray};
  width: 100%;
  overflow-wrap: break-word;
  font-size: 2rem;
  padding: 0;
  @media (min-width: 380px) {
    font-size: 2.2rem;
  }
  @media (min-width: 670px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.6rem;
  }
`;

const Task = ({ children, index }) => (
  <StyledWrapper>
    <DeleteButton index={index} />
    <StyledParagraph>{children}</StyledParagraph>
  </StyledWrapper>
);

export default Task;
