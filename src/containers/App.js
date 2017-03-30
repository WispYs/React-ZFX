'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import {
    Router, Route, hashHistory
}
from 'react-router';
import {Index} from './Index';
import {Person} from './Person';
import {Yixiang} from './Yixiang';
import {Details} from './Details';
import {AreaSearch} from './AreaSearch';
import {Activity} from './Activity';
import {IndexSearch} from './IndexSearch';
import {Footer} from '../components/Footer';
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
