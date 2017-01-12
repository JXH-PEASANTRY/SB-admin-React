import React, {PropTyes, Component} from 'react';
import classNames from 'classnames';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import Modal from 'react-bootstrap/lib/Modal'

class AnalysisManager extends Component {



    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    close() {
        this.setState({showModal: false})
    };

    open() {
        this.setState({showModal: true})
    };


    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <PageHeader>退信管理</PageHeader>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-3 font-size-13">
                            <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={()=>{this.open()}}>
                                添加分类
                            </button>

                            <div className="box box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">分类</h3>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked li-list">
                                        <li ><a > 域名不存在
                                            <i className="fa fa-trash-o pull-right fa-font-style"></i>
                                            <i className="fa fa-edit pull-right fa-font-style"></i></a>
                                        </li>
                                        <li><a href="#"> 邮箱不存在<i className="fa fa-trash-o pull-right fa-font-style"></i>
                                            <i className="fa fa-edit pull-right fa-font-style"></i>
                                        </a></li>
                                        <li><a href="#">邮箱已满<i className="fa fa-trash-o pull-right fa-font-style"></i>
                                            <i className="fa fa-edit pull-right fa-font-style"></i></a></li>
                                        <li><a href="#">内容拒绝<i className="fa fa-trash-o pull-right fa-font-style"></i>
                                            <i className="fa fa-edit pull-right fa-font-style"></i></a>
                                        </li>
                                        <li><a href="#">IP拒绝<i className="fa fa-trash-o pull-right fa-font-style"></i>
                                            <i className="fa fa-edit pull-right fa-font-style"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">退信原因</h3>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a><i className="fa fa-circle-o text-red"></i> 已分类<span
                                            className="label label-primary pull-right">12</span></a></li>
                                        <li className="active"><a ><i
                                            className="fa fa-circle-o text-yellow"></i> 未分类 <span
                                            className="label label-warning pull-right">65</span></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-9" id="unClassifiedPanel">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">未分类</h3>

                                </div>
                                <div className="box-body no-padding">
                                    <div className="mailbox-controls">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <button type="button" className="btn btn-primary btn-block"
                                                >自动分类
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive mailbox-messages">
                                        <table className="table table-hover table-striped table-font">
                                            <tbody>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i
                                                    className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa fa-plus"></i></td>

                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to
                                                    find a
                                                    solution to this
                                                    problem...
                                                </td>
                                                <td className="mailbox-attachment"><i className="fa  fa-plus"></i></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 mar-top-5">
                                        <div className="page-foot font-size-12">
                                        <span>
                                            当前 1 / 6 页   &nbsp;&nbsp;共 60 条
                                        </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-1"></div>
                                    <div className="col-sm-5 pull-right ">
                                        <Pagination className="pull-right"
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


                    <Modal show={this.state.showModal} onHide={()=>{this.close()}} backdrop="static">
                        <Modal.Header closeButton>
                            <Modal.Title>添加分类</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>请添加你所需要的分类</h4>
                            <p>Please add the category you need...</p>

                            <hr />

                            <h4>Overflowing text to show scroll behavior</h4>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="primary"  onClick={()=>{this.close()}}>确定</Button>
                            <Button onClick={()=>{this.close()}}>关闭</Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </div>

        )
    }

}

export default AnalysisManager;