import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from '../components/App';
import React from 'react'
import AnalysisManager from './dashboardPages/mdcsAnalysis/AnalysisManager'
import Table from './dashboardPages/table/Table'


const routes = () => {

    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Table}/>
                <Route path="/analysismanager" component={AnalysisManager}/>
                <Route path="/table" component={Table}/>
            </Route>
        </Router>
    )
};

export default routes;