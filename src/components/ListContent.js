'use strict';

import React from 'react';
var ListDetails = require('./ListDetails');
var PublicDate = require('../vendor/publicdate.js');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      addClassIndex: 0, //用于添加class
      showLeft: true,
      list_left: PublicDate.listContent_left,
      list_right: PublicDate.listContent_right
    }
  },
  handleClick: function(index, e) {
    this.setState({
      addClassIndex: index
    });
    if (index == 0) {
      this.setState({
        showLeft: true
      });
    } else {
      this.setState({
        showLeft: false
      });
    }
  },
  listsClick: function(index, e) {
    console.log(index)
  },
  render: function() {
    let tabs = ["附近房源", "热门推荐"]
    return (
      <div>
          <div className="list_tab">
              <ul>
                  {
                    tabs.map(function(item,index){
                      return <li key={index} onClick={this.handleClick.bind(this,index)} className={this.state.addClassIndex == index ? 'cur_bg' : ''}>{item}</li>
                    },this)
                  }
              </ul>
          </div>
          <div id="listContent_left" className={this.state.showLeft ? '' : 'hideStyle'}>
            <ListDetails lists={this.state.list_left} />
         </div>
         <div id="listContent_right" className={this.state.showLeft ? 'hideStyle' : ''}>
            <ListDetails lists={this.state.list_right} />
         </div>
      </div>
    )
  }
})