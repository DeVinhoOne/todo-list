import React from 'react';
import styled from 'styled-components';
import AddButton from '../../atoms/AddButton/AddButton';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  width: 785px;
  display: flex;
  justify-content: space-between;
`;

const Panel = () => (
  <StyledWrapper>
    <Input />
    <AddButton />
  </StyledWrapper>
);

export default Panel;
