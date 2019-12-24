import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';
import Task from '../components/atoms/Task/Task';

const StyledWrapper = styled.div`
  margin-top: 100px;
`;

const Root = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = text => setValue(text);

  const handleTaskAddition = () => {
    if (value !== '') {
      setTasks([...tasks, value]);
      setValue('');
    } else {
      alert('Type something');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <GlobalStyle />
        <Panel
          value={value}
          handleChange={text => handleInputChange(text)}
          handleAddition={handleTaskAddition}
        />
        {tasks.map(task => (
          <Task>{task}</Task>
        ))}
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default Root;
