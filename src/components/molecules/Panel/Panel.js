import React from 'react';
import styled from 'styled-components';
import AddButton from '../../atoms/AddButton/AddButton';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  width: 785px;
  display: flex;
  justify-content: space-between;
`;

const Panel = ({ handleChange, handleAddition, value }) => (
  <StyledWrapper>
    <Input value={value} handleChange={text => handleChange(text)} />
    <AddButton handleAddition={handleAddition} />
  </StyledWrapper>
);

export default Panel;
