import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Context  } from './store'

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);
