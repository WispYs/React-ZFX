'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import {
    Router, Route, hashHistory
}
from 'react-router';

var Index = require('./Index');
var Yixiang = require('./Yixiang');
var Person = require('./Person');
var Details = require('./Details');
var AreaSearch = require('./AreaSearch');
var IndexSearch = require('./IndexSearch');
var Activity = require('./Activity');
var Footer = require('../components/Footer');


//最终渲染
ReactDom.render((
    <div>
        <Router history={hashHistory}>
            <Route path='/' component={Index}></Route>
            <Route path='/yixiang' component={Yixiang} />
            <Route path='/person' component={Person} />
            <Route path='/details' component={Details} />
            <Route path='/areaSearch' component={AreaSearch} />
            <Route path='/indexSearch' component={IndexSearch} />
            <Route path='/activity' component={Activity} />
        </Router>
    </div>
), document.getElementById('app'));
/*var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app1!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app2!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});*/