import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App';
// import './styles/style.css';

const store = configureStore();

ReactDOM.render(
  <App />, document.getElementById('root')
);
