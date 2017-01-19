import React from 'react'
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


import Routers from './Container/router'
import App from './components/App';
import AnalysisManager from './Container/dashboardPages/mdcsAnalysis/AnalysisManager'
import Table from './Container/dashboardPages/table/Table'

import appReducer from './reducers/index'
import {query} from './actions/action'


const loggerMiddleware = createLogger();
let store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, loggerMiddleware));

//console.log(store.getState().category);

const rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    rootElement
)
;
