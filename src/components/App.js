import React, { Component } from 'react'
import Header from './Header/index'
import Table from '../Container/dashboardPages/table/Table'
import AnalysisManager from '../Container/dashboardPages/mdcsAnalysis/AnalysisManager';
import RouteHandler from 'react-router'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import * as actions from '../actions/action'




class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <div id="page-wrapper" className="page-wrapper" >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

/*let mapStateToProps = state => {
    return {
        state
    }
};

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);*/


export default App;
