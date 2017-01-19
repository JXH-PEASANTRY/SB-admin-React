import React, { Component} from 'react';
import className from 'classnames';

export default class Li extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteCate(id) {
        this.props.deleteCategory(id);
    }

    swapTab(id) {
        this.props.querykeyword(id);
    }

    render() {
        return (
            <ul className="nav nav-pills nav-stacked li-list">
                {
                    this.props.categories.map(category => (
                        <li key={category.id} onClick={() => {this.swapTab(category.id)}}
                            className={(category.id==this.props.categoryId)?"active pointer":"pointer"}><a >{category.name}
                            <i className="fa fa-trash-o pull-right fa-font-style"
                               onClick={()=>{this.deleteCate(category.id)}}></i>
                           </a>
                        </li>
                    ))
                }
            </ul>
        )

    }
}