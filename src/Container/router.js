import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';
import App from '../components/App';
import React from 'react'
import AnalysisManager from './dashboardPages/mdcsAnalysis/AnalysisManager'
import Table from './dashboardPages/table/Table'


const Container = (props) => {
    return (
        <div>{props.children}</div>
    );
};

export default function (store) {

    return (
        <Router history={hashHistory }>
            <Route path="/" component={App}>
                <IndexRoute component={Table}/>
                <Route path="/analysismanager" component={AnalysisManager}/>
                <Route path="/table" component={Table}/>
            </Route>
        </Router>
    )
};

