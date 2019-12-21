import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  width: 500px;
  height: 30px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, hsl(9, 100%, 58%) 0%, hsl(346, 100%, 63%) 100%);
    border-radius: 50px;
    opacity: 50%;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  line-height: 30px;
  top: 0;
  left: 0;
  font-size: 2.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightGray};
  opacity: 0.3;
  z-index: -1;
  transition: all 0.1s ease-in-out;
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

  &:focus ~ ${StyledLabel} {
    transform: translateY(-100%);
    font-size: 1.9rem;
  }
`;

const Input = () => {
  //   const [active, setActive] = useState(false);

  //   const handleActiveChange = () => setActive(!active);
  //   console.log(active);

  return (
    <StyledWrapper>
      <StyledInput type="text" id="task" />
      <StyledLabel htmlFor="task">Enter Your Todo..</StyledLabel>
    </StyledWrapper>
  );
};

export default Input;
