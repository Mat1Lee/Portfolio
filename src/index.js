import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './Components/Loading/Loading';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Loading/>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
