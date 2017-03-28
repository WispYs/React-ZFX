'use strict';

import React from 'react';
var Tabs = require('../components/Tabs');
var ListDetails = require('../components/ListDetails');
var Footer = require('../components/Footer');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      addClassIndex: 0, //用于添加class
      showState: true,
      noList_before: false,
      noList_after: false,
      tabs: ['待出价', '已出价'],
      lists1: [{
        titleType: '签约方式：',
        titleRight: '当面签约',
        name: '香楠小区2居室-西卧',
        location: {
          lat: "31.2225400000",
          lng: "121.6219990000"
        },
        length: '200m',
        area: '11㎡',
        floor: '01/13层',
        price: '￥1390',
        type: [{
          name: '精装房',
          className: 'list_color1'
        }, {
          name: '地铁房',
          className: 'list_color2'
        }, {
          name: '随时看',
          className: 'list_color3'
        }],
        address: '距离2号线张江高科站200米',
        image: '../src/images/ad4.png',
        bottom: ['放弃', '出价']
      }, {
        titleType: '签约方式：',
        titleRight: '电话签约',
        name: '园西一居1居室-东卧',
        location: {
          lat: "31.1965480000",
          lng: "121.7027610000"
        },
        length: '600m',
        area: '16㎡',
        floor: '08/14层',
        price: '￥3490',
        type: [{
          name: '精装房',
          className: 'list_color1'
        }],
        address: '距离10号线川沙站300米',
        image: '../src/images/ad5.png',
        bottom: ['放弃', '出价']
      }],
      lists2: [{
        titleType: '我的出价：',
        titleRight: '3000元/月',
        name: '御景豪园1居室-南卧',
        location: {
          lat: "31.1982850000",
          lng: "121.6898340000"
        },
        length: '300m',
        area: '32㎡',
        floor: '02/12层',
        price: '￥3390',
        type: [{
          name: '地铁房',
          className: 'list_color2'
        }, {
          name: '随时看',
          className: 'list_color3'
        }],
        address: '距离2号线川沙站600米',
        image: '../src/images/ad1.png',
        bottom: ['联系房东', '生成合同']
      }, {
        titleType: '我的出价：',
        titleRight: '5000元/月',
        name: '东方悦居苑1居室-北卧',
        location: {
          lat: "31.1701590000",
          lng: "121.5118080000"
        },
        length: '1300m',
        area: '16㎡',
        floor: '01/17层',
        price: '￥1323',
        type: [{
          name: '精装房',
          className: 'list_color1'
        }, {
          name: '地铁房',
          className: 'list_color2'
        }],
        address: '距离6号线三林站500米',
        image: '../src/images/ad2.png',
        bottom: ['联系房东', '生成合同']
      }]
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
                            <ListDetails lists={this.state.lists1}/>
                        </div>
                        {beforeHtml}
                    </div>
                </div>
                <div className={this.state.showState ? 'yxd_hide' : ''}>
                    <div className="yxd_afterList">
                        <div className="yxd_listBox">
                            <ListDetails lists={this.state.lists2}/>
                        </div>
                        {afterHtml}
                    </div>
                </div>
                <Footer/>
            </div>
    )
  }
})