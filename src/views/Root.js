import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';
import Task from '../components/atoms/Task/Task';
import { ValueContext } from '../context/value-context';
import { DeleteContext } from '../context/delete-context';
import Footer from '../components/atoms/Footer/Footer';

const TasksWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
      alert('Empty field. Please enter some todo.');
    }
  };

  const handleTaskDelete = index => {
    const newArray = tasks.filter((task, i) => i !== index);
    setTasks(newArray);
  };

  return (
    <ThemeProvider theme={theme}>
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
      <TasksWrapper>
        {tasks.map((task, index) => (
          <DeleteContext.Provider value={() => handleTaskDelete(index)}>
            <Task key={index}>{task}</Task>
          </DeleteContext.Provider>
        ))}
      </TasksWrapper>
      <Footer />
    </ThemeProvider>
  );
};
export default Root;
