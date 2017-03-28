'use strict';

import React from 'react';

var ListTop = require('./ListTop');
var ListContent = require('./ListContent');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="list">
                <ListTop/>
                <ListContent/>
                <div className="no_list">没有更多信息</div>
            </div>
        )
    }
})