import {createStore, applyMiddleware } from 'redux'
import App from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


const  loggerMiddleware = createLogger();
let store = createStore(App, applyMiddleware(thunkMiddleware, loggerMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;