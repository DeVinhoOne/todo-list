import React from 'react';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';
// import { TodosContext } from '../../context/todos-context';
import Panel from '../../components/molecules/Panel/Panel';
import Task from '../../components/atoms/Task/Task';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <StyledWrapper>
    <Panel />
    <Task />
  </StyledWrapper>
);

export default App;
