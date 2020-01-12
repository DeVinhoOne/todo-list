import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';

const Index = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
