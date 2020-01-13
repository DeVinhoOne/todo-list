import React from 'react';
import styled from 'styled-components';
import { ValueContext } from '../../../context/value-context';

const StyledWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  height: 30px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, hsl(9, 100%, 58%) 0%, hsl(346, 100%, 63%) 100%);
    opacity: 50%;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  line-height: 30px;
  top: 0;
  left: 0;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightGray};
  opacity: 0.3;
  z-index: -1;
  transition: all 0.1s ease-in-out;

  @media (min-width: 380px) {
    font-size: 2rem;
  }

  @media (min-width: 670px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 2.2rem;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.lightGray};
  font-weight: 300;
  font-size: 2.2rem;
  z-index: 1;
  padding: 0;

  &:focus ~ ${StyledLabel} {
    transform: translateY(-100%);
    font-size: 1.5rem;
    @media (min-width: 380px) {
      font-size: 1.7rem;
    }
    @media (min-width: 670px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.9rem;
    }
  }
`;

const Input = ({ placeholder }) => {
  return (
    <StyledWrapper>
      <ValueContext.Consumer>
        {value => {
          console.log(value);
          return (
            <StyledInput
              value={value.value}
              onChange={e => value.handleChange(e.target.value)}
              type="text"
              id="task"
            />
          );
        }}
      </ValueContext.Consumer>
      <StyledLabel htmlFor="task">{placeholder}</StyledLabel>
    </StyledWrapper>
  );
};

export default Input;
