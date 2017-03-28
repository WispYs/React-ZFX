'use strict';

import React from 'react';
import {
  Router, Route, Link 
}
from 'react-router';
module.exports = React.createClass({
    render: function(){
        return (
            <div className="banner">
                <div className="isearch">
                    <Link to="/indexSearch">
                        <span>搜索</span>
                    </Link>
                </div>
                <img className="bannerImg" src="../src/images/banner.png"/>
            </div>
        )
    }
})