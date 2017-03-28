'use strict';

import React from 'react';
var Title = require('../components/Title');
var List = require('../components/List');
var Footer = require('../components/Footer');
module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <Title />
                <List/>
                <Footer/>
            </div>
        );
    }
})