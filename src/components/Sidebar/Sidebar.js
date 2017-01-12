import React, { Component} from 'react';
import classNames from 'classnames';
import Link from 'react-router/lib/Link'


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartsElementsCollapsed: true,
        };
    }
    render() {
        return (
            <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
                <div className="sidebar-nav navbar-collapse collapse">
                    <ul className="nav in" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-search"/>
                                        </button>
                                    </span>
                            </div>
                        </li>

                        <li>
                            <a href="" >
                                <i className="fa fa-dashboard fa-fw"/> &nbsp;Dashboard
                            </a>
                        </li>

                        <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
                            <a
                                href=""
                                onClick={(e) => {e.preventDefault();
                                this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                                return false;}}
                            >
                                <i className="fa fa-bar-chart-o fa-fw"/> &nbsp;Charts
                                    <span className="fa arrow"/>
                            </a>
                            <ul
                                className={classNames({'nav nav-second-level': true,collapse: this.state.chartsElementsCollapsed, })}
                            >
                                <li>
                                    <a href="" onClick={(e) => { e.preventDefault(); history.push('/flotcharts'); }}>
                                        FlotCharts
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        onClick={(e) => { e.preventDefault(); history.push('/morrisjscharts'); }}
                                    >
                                        Morrisjs Charts
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <Link to="table" >
                                <i className="fa fa-table fa-fw"/> &nbsp;Tables
                            </Link>
                        </li>

                        <li>
                            <Link to="analysismanager" ><i className="fa fa-table fa-fw"/> &nbsp;退信管理</Link>
                        </li>

                    </ul>
                </div>
            </div>
        )

    }

}

export default Sidebar;
