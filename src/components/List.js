'use strict';

import React from 'react';

var ListContent = require('./ListContent');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="list">
                <div className="list_title">
                    <span className="list_left">当前位置：<em>徐家汇商圈</em></span>
                    <span className="list_right_btn">重新定位</span>
                </div>
                <ListContent/>
                <div className="no_list">没有更多信息</div>
            </div>
        )
    }
})