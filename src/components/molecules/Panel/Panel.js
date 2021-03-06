import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  margin: 60px auto;
  margin-bottom: 35px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 670px) {
    width: 500px;
  }

  @media (min-width: 1000px) {
    width: 650px;
  }
`;

const Panel = ({ value, setValue, addNewTask }) => (
  <StyledWrapper>
    <Input type="text" placeholder="Type some Todo.." value={value} changeHandler={e => setValue(e)} />
    <Button addNewTask={addNewTask}>Add</Button>
  </StyledWrapper>
);

export default Panel;
