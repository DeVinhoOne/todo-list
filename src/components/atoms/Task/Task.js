import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 770px;
  height: 100px;
  background: linear-gradient(270deg, hsl(346, 100%, 63%) 0%, hsl(9, 100%, 58%) 100%);
  display: flex;
  align-items: center;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.lightGray};
  font-size: 2.6rem;
  margin: 0 0 0 20px;
  padding: 0;
`;

const Task = ({ children }) => (
  <StyledWrapper>
    <StyledParagraph>{children}</StyledParagraph>
  </StyledWrapper>
);

export default Task;
