import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Chronicles } from './components/Chronicles';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Chronicles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);