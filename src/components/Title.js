'use strict';

import React from 'react';

var Banner = require('./Banner');
var Type = require('./Type');
module.exports = React.createClass({
    render: function(){
        return (
            <div className="title">
                <Banner/>
                <Type/>
            </div>
        )
    }
})