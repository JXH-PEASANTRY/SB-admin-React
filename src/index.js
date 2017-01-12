import React from 'react'
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute } from 'react-router'
import Routers from './router/router'
import App from './components/App';
import AnalysisManager from './router/dashboardPages/mdcsAnalysis/AnalysisManager'
import Table from './router//dashboardPages/table/Table'


const rootElement = document.getElementById('root');
render(

    <Routers />,
    rootElement

);
