'use strict';

import React from 'react';
import {
  Router, Route, Link 
}
from 'react-router';
var List = require('../components/List');
var Footer = require('../components/Footer');
var PublicDate = require('../vendor/publicdate.js');
var Banner = React.createClass({
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
var Type = React.createClass({
    render: function() {
        return (
            <div className="typeBox">
                <ul>
                    {
                        PublicDate.Index_typeLists.map(function(item,index){
                            return <Link to={item.href} key={index}><li className="typeList"><img className="typeImg" src={item.src}/><span>{item.name}</span></li></Link>
                        })
                    }
                </ul>
            </div>
        )
    }
})
module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <div className="index_top">
                    <Banner/>
                    <Type/>
                </div>
                <List/>
                <Footer/>
            </div>
        );
    }
})