import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// need to add
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducers'
import reduxPromise from 'redux-promise'

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
     document.getElementById('root')
     );