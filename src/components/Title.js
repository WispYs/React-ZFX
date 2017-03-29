'use strict';

import React from 'react';

module.exports = React.createClass({
    backFunction: function() {
        window.history.go(-1);
    },
    render: function() {
        return (
            <div className="title" >
                <span onClick={this.backFunction}></span>
                <h2>{this.props.content}</h2>
            </div>
        )
    }
})