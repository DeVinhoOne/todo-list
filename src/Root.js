import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import { TodosContext } from './context/todos-context';
// import Footer from './components/atoms/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import App from './views/App/App';

// const TasksWrapper = styled.div`
//   margin-top: 35px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex: 1;
// `;

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

  const app = (
    <TodosContext.Provider
      value={{
        tasks,
        value,
        handleChange: text => handleInputChange(text),
        handleAddition: () => handleTaskAddition(),
        handleTaskDelete: index => handleTaskDelete(index)
      }}
    >
      <App />
    </TodosContext.Provider>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact children={<HomePage />} />
        <Route path="/login" children={<Login />} />
        <Route path="/signup" children={<SignUp />} />
        <Route path="/app" children={app} />
      </Switch>
      {/*
      <TasksWrapper>
        {tasks.map((task, index) => (
          <DeleteContext.Provider value={() => handleTaskDelete(index)}>
            <Task key={index}>{task}</Task>
          </DeleteContext.Provider>
        ))}
      </TasksWrapper>
      <Footer /> */}
    </ThemeProvider>
  );
};

export default Root;
