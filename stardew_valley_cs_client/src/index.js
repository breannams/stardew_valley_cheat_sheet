import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import {  Router } from 'react-router-dom';
import history from './helpers/history';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
    <Router history = {history}>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

