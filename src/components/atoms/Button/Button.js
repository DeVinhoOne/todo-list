import React from 'react';
import styled from 'styled-components';
import { TodosContext } from '../../../context/todos-context';

const StyledButton = styled.button`
  width: 160px;
  height: 48px;
  font-size: 2.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightGray};
  border: none;
  padding: 0;
  background: linear-gradient(90deg, hsl(346, 100%, 63%) 0%, hsl(9, 100%, 58%) 100%);
  box-shadow: 0px 0px 10px rgba(230, 230, 230, 0.3);
  cursor: pointer;

  @media (min-width: 380px) {
    width: 200px;
    height: 60px;
    font-size: 2.4rem;
  }

  @media (min-width: 1000px) {
    width: 230px;
    height: 69px;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 15px rgba(230, 230, 230, 0.4);
    }
  }
`;

const Button = ({ children }) => (
  <TodosContext.Consumer>
    {({ handleAddition }) => <StyledButton onClick={handleAddition}>{children}</StyledButton>}
  </TodosContext.Consumer>
);

export default Button;
