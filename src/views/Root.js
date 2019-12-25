import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';
import Task from '../components/atoms/Task/Task';
import { ValueContext } from '../context/value-context';

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

  const handleTaskDelete = index => {
    const newArray = tasks.filter((task, i) => i !== index);
    setTasks(newArray);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <GlobalStyle />
        <ValueContext.Provider
          value={{
            value,
            handleChange: text => handleInputChange(text),
            handleAddition: () => handleTaskAddition()
          }}
        >
          <Panel />
        </ValueContext.Provider>
        {tasks.map((task, index) => (
          <Task handleDelete={() => handleTaskDelete(index)} key={index}>
            {task}
          </Task>
        ))}
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default Root;
