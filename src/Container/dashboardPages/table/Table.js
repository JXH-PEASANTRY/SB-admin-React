import React, {PropTyes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';

const title = 'Table';

function displayTable(prop, context){

    return(
        <div >
            <div className="col-lg-12">
                <PageHeader>Table</PageHeader>
            </div>

            <div className="col-lg-12">
                <Panel header={<span>Data Tables</span>}>
                    <div>
                        <div className="dataTable_wrapper">
                            <div
                                id="dataTables-example_wrapper"
                                className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                            >
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table
                                            className="table table-striped table-bordered table-hover dataTable no-footer"
                                            id="dataTables-example"
                                            role="grid"
                                            aria-describedby="dataTables-example_info"
                                        >
                                            <thead>
                                            <tr role="row">
                                                <th
                                                    className="sorting_asc"
                                                    tabIndex="0"
                                                    aria-controls="dataTables-example"
                                                    rowSpan="1"
                                                    colSpan="1"
                                                    aria-label="Rendering engine: activate to sort column descending"
                                                    aria-sort="ascending"
                                                    style={{ width: 265 }}
                                                >
                                                    Rendering engine
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex="0"
                                                    aria-controls="dataTables-example"
                                                    rowSpan="1"
                                                    colSpan="1"
                                                    aria-label="Browser: activate to sort column ascending"
                                                    style={{ width: 321 }}
                                                >
                                                    Browser
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex="0"
                                                    aria-controls="dataTables-example"
                                                    rowSpan="1"
                                                    colSpan="1"
                                                    aria-label="Platform(s): activate to sort column ascending"
                                                    style={{ width: 299 }}
                                                >
                                                    Platform(s)
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex="0"
                                                    aria-controls="dataTables-example"
                                                    rowSpan="1"
                                                    colSpan="1"
                                                    aria-label="Engine version: activate to sort column ascending"
                                                    style={{ width: 231 }}
                                                >
                                                    Engine version
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex="0"
                                                    aria-controls="dataTables-example"
                                                    rowSpan="1"
                                                    colSpan="1"
                                                    aria-label="CSS grade: activate to sort column ascending"
                                                    style={{ width: 180 }}
                                                >CSS grade
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="gradeA odd" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Firefox 1.0</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td className="center">1.7</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA even" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Firefox 1.5</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td className="center">1.8</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA odd" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Firefox 2.0</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td className="center">1.8</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA even" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Firefox 3.0</td>
                                                <td>Win 2k+ / OSX.3+</td>
                                                <td className="center">1.9</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA odd" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Camino 1.0</td>
                                                <td>OSX.2+</td>
                                                <td className="center">1.8</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA even" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Camino 1.5</td>
                                                <td>OSX.3+</td>
                                                <td className="center">1.8</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA odd" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Netscape 7.2</td>
                                                <td>Win 95+ / Mac OS 8.6-9.2</td>
                                                <td className="center">1.7</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA even" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Netscape Browser 8</td>
                                                <td>Win 98SE+</td>
                                                <td className="center">1.7</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA odd" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Netscape Navigator 9</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td className="center">1.8</td>
                                                <td className="center">A</td>
                                            </tr>
                                            <tr className="gradeA even" role="row">
                                                <td className="sorting_1">Gecko</td>
                                                <td>Mozilla 1.0</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td className="center">1</td>
                                                <td className="center">A</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div
                                            className="dataTables_info"
                                            id="dataTables-example_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            Showing 1 to 10 of 57 entries
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-3 pull-right " >
                                        <Pagination
                                            activePage={1}
                                            items={6}
                                            first
                                            last
                                            prev
                                            next
                                            onSelect={() => {
                                            }}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </Panel>
            </div>



        </div>

    );


};

export default displayTable;
