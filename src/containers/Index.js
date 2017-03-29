'use strict';

import React from 'react';
import {
  Router, Route, Link 
}
from 'react-router';
var List = require('../components/List');
var Footer = require('../components/Footer');
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
        let typeLists = [
            {
                name : '区域找房',
                src : '../src/images/index_icon1.png',
                href : '/areaSearch'
            },{
                name : '地铁找房',
                src : '../src/images/index_icon2.png',
                href : '/areaSearch'
            },{
                name : '整租房源',
                src : '../src/images/index_icon3.png',
                href : '/areaSearch'
            },{
                name : '合租房源',
                src : '../src/images/index_icon4.png',
                href : '/areaSearch'
            },{
                name : '品牌公寓',
                src : '../src/images/index_icon5.png',
                href : '/areaSearch'
            },{
                name : '活动专题',
                src : '../src/images/index_icon6.png',
                href : '/activity'
            },{
                name : '私人订制',
                src : '../src/images/index_icon7.png',
                href : '/areaSearch'
            },{
                name : '我是房东',
                src : '../src/images/index_icon8.png',
                href : '/areaSearch'
            }
        ]
        return (
            <div className="typeBox">
                <ul>
                    {
                        typeLists.map(function(item,index){
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