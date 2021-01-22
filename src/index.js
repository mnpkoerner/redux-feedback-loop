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
            return state.feeling = action.payload;
        case 'UNDERSTANDING':
            return state.feeling = action.payload;
        case 'SUPPORT':
            return state.support = action.payload;
        case 'COMMENTS':
            return state.comments = action.payload;
    }
}


//wrap app in provider tag to access store
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
