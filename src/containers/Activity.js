'use strict';

import React from 'react';
var Title = require('../components/Title');
module.exports = React.createClass({
    backFunction: function() {
        window.history.go(-1);
    },
    render: function() {
        return (
            <div className="activity">
                <Title content='活动专题' />
            </div>
        )
    }
})