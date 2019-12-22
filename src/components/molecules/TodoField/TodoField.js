import React from 'react';
import styled from 'styled-components';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import Task from '../../atoms/Task/Task';

const StyledWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  display: inline-block;
`;

const ExtendDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const TodoField = () => (
  <StyledWrapper>
    <ExtendDeleteButton />
    <Task>Learn React.js</Task>
  </StyledWrapper>
);

export default TodoField;
