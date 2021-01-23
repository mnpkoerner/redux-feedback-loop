import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//set up redux
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

//reducers

//holding all data in an object
const feedbackReducer = (state = {}, action) => {
    switch(action.type){
        case 'FEELING':
            state.feeling = action.payload;
            return state;
        case 'UNDERSTANDING':
            state.understanding = action.payload;
            return state;
        case 'SUPPORT':
            state.support = action.payload;
            return state;
        case 'COMMENTS':
            state.comments = action.payload;
            return state;
        case 'RESET':
            state = {};
            return state;
        default:
            return state;
    }
}
const adminReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_FEEDBACK':
            state = action.payload;
            return state;
        case 'RESET_ADMIN':
            state = [];
            return state;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
      feedbackReducer
    }),
    applyMiddleware(logger)
  );

//wrap app in provider tag to access store
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
