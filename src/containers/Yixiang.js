'use strict';

import React from 'react';
var Tabs = require('../components/Tabs');
var ListDetails = require('../components/ListDetails');
var PublicDate = require('../vendor/publicdate.js');
var Footer = require('../components/Footer');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      addClassIndex: 0, //用于添加class
      showState: true,
      noList_before: false,
      noList_after: false,
      tabs: ['待出价', '已出价']
    }
  },
  onChildChanged: function(newState) {
    this.setState({
      showState: newState
    });
  },
  listsClick: function(index, e) {
    console.log(index)
  },
  render: function() {
    var beforeHtml, afterHtml;
    if (this.state.noList_before) {
      beforeHtml =
        <div className="yxd_nolist">
                        <img src="../src/images/yxd_nolist.png"/>
                        <p>还在努力寻找吗？不妨点我试试看！</p>
                    </div>
    }
    if (this.state.noList_after) {
      afterHtml =
        <div className="yxd_nolist">
                        <img src="../src/images/yxd_nolist.png"/>
                        <p>出价即可优先订房，再不出手，花都谢了！</p>
                    </div>
    }
    return (
      <div className="yixiangdan">
                <Tabs showState={this.state.showState} callbackParent={this.onChildChanged} tabs={this.state.tabs}/>
                <div className={this.state.showState ? '' : 'yxd_hide'}>
                    <div className="yxd_beforeList">
                        <div className="yxd_listBox">
                            <ListDetails lists={PublicDate.Yixiangfang_beforeList}/>
                        </div>
                        {beforeHtml}
                    </div>
                </div>
                <div className={this.state.showState ? 'yxd_hide' : ''}>
                    <div className="yxd_afterList">
                        <div className="yxd_listBox">
                            <ListDetails lists={PublicDate.Yixiangfang_afterList}/>
                        </div>
                        {afterHtml}
                    </div>
                </div>
                <Footer/>
            </div>
    )
  }
})