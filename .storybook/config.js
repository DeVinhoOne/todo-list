import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

addDecorator(story => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  </BrowserRouter>
));
