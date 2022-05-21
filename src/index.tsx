import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './p1-main/m1-ui/u1-app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// igg2

ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
      <App />,
  //   </BrowserRouter>
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
