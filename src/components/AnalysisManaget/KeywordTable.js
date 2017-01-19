import React, { Component} from 'react'
import classNames from 'classnames'
import Pagination from 'react-bootstrap/lib/Pagination';

export default class KeywordTable extends Component {

    constructor(props) {
        super(props);
    }

    title(categoryId) {
        switch(categoryId){
            case "1":
                return "域名不存在"
            case "2":
                return "邮箱不存在"
            case "4":
                return "MAC地址不存在"
            default:
                return "关键词"
        }

    }

    render() {

        return (
            <div className="col-md-9" id="unClassifiedPanel">
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">{this.title(this.props.keyword.categoryId)}</h3>

                    </div>
                    <div className="box-body no-padding">
                        <div className="mailbox-controls">
                            <div className="row">
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mailbox-messages">
                            <table className="table table-hover table-striped table-font">
                                <thead>
                                <tr>
                                    <th width="70%">关键词</th>
                                    <th width="20%" >类型</th>
                                    <th width="10%"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.keyword.keyword.map(keyword => (
                                        <tr key={keyword.id}>
                                            <td className="mailbox-subject">
                                                {keyword.keyword}
                                            </td>
                                            <td className="mailbox-subject">
                                                {keyword.categoryId}
                                            </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-trash-o"></i>
                                            </td>
                                        </tr>

                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mar-top-5">
                            <div className="page-foot font-size-12">
                                        <span>
                                            当前 1 / 6 页   &nbsp;&nbsp;共 {this.props.keyword.keyword.length} 条
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
        )
    }


}