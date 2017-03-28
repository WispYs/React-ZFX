'use strict';

import React from 'react';
import {
    Router, Route, Link
}
from 'react-router';
module.exports = React.createClass({
    render: function() {
        return (
            <div className="typeBox">
                <ul>   
                    <Link to="/areaSearch">
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon1.png"/>
                        <span>区域找房</span>
                    </li>
                    </Link>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon2.png"/>
                        <span>地铁找房</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon3.png"/>
                        <span>整租房源</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon4.png"/>
                        <span>合租房源</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon5.png"/>
                        <span>品牌公寓</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon6.png"/>
                        <span>活动专题</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon7.png"/>
                        <span>私人订制</span>
                    </li>
                    <li className="typeList">
                        <img className="typeImg" src="../src/images/index_icon8.png"/>
                        <span>我是房东</span>
                    </li>
                </ul> 
            </div>
        )
    }
})