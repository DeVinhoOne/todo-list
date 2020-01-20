import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
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
  const [uid, setUid] = useState('');
  const db = firebase.firestore();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
        db.collection('tasks')
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              setTasks(doc.data().userTasks);
            } else {
              console.log('No such document!');
            }
          })
          .catch(err => {
            console.log('Error while getting document', err);
          });
      } else {
        console.log('No user');
      }
    });
  }, []);

  const addNewTask = (value, tasks, uid) => {
    if (value) {
      setTasks(tasks.concat(value));
      db.collection('tasks')
        .doc(uid)
        .set({ userTasks: tasks.concat(value) });
      setValue('');
    } else {
      alert('Empty field!');
    }
  };

  return (
    <StyledWrapper>
      <Panel value={value} setValue={e => setValue(e.target.value)} addNewTask={() => addNewTask(value, tasks, uid)} />
      {tasks.map((task, index) => (
        <Task key={index}>{task}</Task>
      ))}
    </StyledWrapper>
  );
};

export default App;
