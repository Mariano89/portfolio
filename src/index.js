import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import App from './App';
import MenuContextProvider, { MenuContext } from './components/contexts/MenuContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
