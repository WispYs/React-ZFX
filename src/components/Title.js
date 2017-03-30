'use strict';

import React from 'react';

export class Title extends React.Component {
    constructor(props) {
        super(props);
        this.backFunction = () => {
            window.history.go(-1);
        }
    }
    render() {
        return (
            <div className="title" >
                <span onClick={this.backFunction}></span>
                <h2>{this.props.content}</h2>
            </div>
        )
    }
}