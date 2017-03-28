'use strict';

import React from 'react';
var Footer = require('../components/Footer');
module.exports = React.createClass({
    changeInput: function(e){
        console.log(e.target.value)
      
      console.log("%c ", "background: url(https://raw.githubusercontent.com/WispYs/Vue2.0-Examples/master/src/assets/img/date.png) no-repeat center;padding-left:120px;padding-bottom: 200px;")
    },
    render: function(){
        return (
            <div className="indexSearch">
                <div className="indexSearch_title">
                    <input type="text" placeholder="请输入小区、商圈、地铁站" onChange={this.changeInput}/>
                    <span>取消</span>
                </div>
                <Footer/>
            </div>

        );
    }
})