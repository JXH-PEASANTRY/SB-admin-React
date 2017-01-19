import React, { Component} from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button';

export default class addModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
    }

    close(e) {
        this.setState({showModal: false})
    };


    entryAdd() {
        e.preventDefault();
        let category = document.getElementById("category").value;
        let arr = this.props.addCategory(category);
    }


    render() {
        return (
            <Modal show={(this.state.showModal&&this.props.showModal)?true:false} onHide={()=>{this.close()}} >
                <Modal.Header closeButton>
                    <Modal.Title>添加分类</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>请添加你所需要的分类</h4>
                    <p>Please add the category you need...</p>

                    <hr />

                    <h4>请填写添加分类</h4>
                    <input type="text" className="form-control" id="category" placeholder="请填写分类名称" />

                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={(e)=>{this.entryAdd(e)}}>确定</Button>
                    <Button onClick={(e)=>{this.close(e)}}>关闭</Button>
                </Modal.Footer>
            </Modal>
        )
    }


}

