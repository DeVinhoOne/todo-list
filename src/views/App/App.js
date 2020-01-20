import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';
import Panel from '../../components/molecules/Panel/Panel';
import Task from '../../components/atoms/Task/Task';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
      } else {
        console.log('No user');
      }
    });
  }, []);

  const addNewTask = (value, tasks) => {
    if (value.length >= 2) {
      setTasks(tasks.concat(value));
      setValue('');
    } else {
      alert('Todo must be longer than 2 characters');
    }
  };

  return (
    <StyledWrapper>
      <Panel value={value} setValue={e => setValue(e.target.value)} addNewTask={() => addNewTask(value, tasks)} />
      {tasks.map((task, index) => (
        <Task key={index}>{task}</Task>
      ))}
    </StyledWrapper>
  );
};

export default App;
