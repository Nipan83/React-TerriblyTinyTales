import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router,Route, browserHistory } from 'react-router';
import Send from './Send';
import Page404 from './Page404';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/Send" component={Send}></Route>
      <Route path="*" component={Page404}></Route>
  </Router>
  ,



document.getElementById('root'));
