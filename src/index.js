import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import loginReducer from './reducers';
/*import addHvacReducer from './reducers';*/

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const logger = createLogger();
const store = createStore(
    loginReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

/*const story = createStore(
    addHvacReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);   