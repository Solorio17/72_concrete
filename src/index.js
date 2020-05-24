import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Fullpage from './Fullpage';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fullpage/>
  </ThemeProvider>,
  document.getElementById('root')
);
