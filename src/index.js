import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import WebRouter from './router/index';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import Reducer from './redux/reducer';
import './static/css/common.css'
import './static/css/page2.scss'
import './static/css/login.scss'
import './static/css/app.scss'

let thunk = ReduxThunk, midware = [thunk];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    midware.push(logger)
}
let store = createStore(Reducer,applyMiddleware(...midware));
ReactDOM.render(<Provider store={store}><WebRouter/></Provider>, document.getElementById('root'));
registerServiceWorker();
