import React from 'react';
import styled from 'styled-components';
import { TodosContext } from '../../context/todos-context';
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
    <TodosContext.Consumer>
      {value =>
        value.tasks.map((task, index) => (
          <Task index={index} key={index}>
            {task}
          </Task>
        ))
      }
    </TodosContext.Consumer>
  </StyledWrapper>
);

export default App;
