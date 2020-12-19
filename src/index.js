import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'


//Esta es la entrada a nuestra aplicación.
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

