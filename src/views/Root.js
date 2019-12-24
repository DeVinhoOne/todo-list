import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/GlobalStyle';
import Panel from '../components/molecules/Panel/Panel';

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
      <>
        <GlobalStyle />
        <Panel
          value={value}
          handleChange={text => handleInputChange(text)}
          handleAddition={handleTaskAddition}
        />
      </>
    </ThemeProvider>
  );
};
export default Root;
