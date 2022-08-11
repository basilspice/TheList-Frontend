

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import 'react-bootstrap'
import 'react-router-bootstrap'
ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);