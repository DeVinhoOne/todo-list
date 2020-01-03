import React from 'react';
import styled from 'styled-components';
import AddButton from '../../atoms/AddButton/AddButton';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  margin: 0 auto;
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

const Panel = () => (
  <StyledWrapper>
    <Input />
    <AddButton />
  </StyledWrapper>
);

export default Panel;
