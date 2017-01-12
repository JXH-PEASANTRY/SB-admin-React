import React, { Component } from 'react'
import Header from './Header/index'
import Table from '../router/dashboardPages/table/Table'
import AnalysisManager from '../router/dashboardPages/mdcsAnalysis/AnalysisManager';
import RouteHandler from 'react-router'




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

export default App
