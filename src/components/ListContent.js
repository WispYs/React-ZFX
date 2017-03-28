'use strict';

import React from 'react';
var ListDetails = require('./ListDetails');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      addClassIndex: 0, //用于添加class
      showLeft: true,
      lists: [{
        name: '建华小区3居室-南卧',
        location: {
          lat: "31.2160550000",
          lng: "121.5563400000"
        },
        length: '500m',
        area: '16㎡',
        floor: '08/14层',
        price: '￥7190',
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
        address: '距离2号线世纪公园站150米',
        image: '../src/images/ad1.png'
      }, {
        name: '香楠小区2居室-西卧',
        location: {
          lat: "31.2225400000",
          lng: "121.6219990000"
        },
        length: '1000m',
        area: '19㎡',
        floor: '01/23层',
        price: '￥3400',
        type: [{
          name: '地铁房',
          className: 'list_color2'
        }, {
          name: '随时看',
          className: 'list_color3'
        }],
        address: '距离2号线张江高科站200米',
        image: '../src/images/ad2.png'
      }, {
        name: '园西一居1居室-东卧',
        location: {
          lat: "31.1965480000",
          lng: "121.7027610000"
        },
        length: '600m',
        area: '21㎡',
        floor: '04/3层',
        price: '￥2450',
        type: [{
          name: '精装房',
          className: 'list_color1'
        }, {
          name: '随时看',
          className: 'list_color3'
        }],
        address: '距离10号线川沙站300米',
        image: '../src/images/ad3.png'
      }, {
        name: '御景豪园1居室-南卧',
        location: {
          lat: "31.1982850000",
          lng: "121.6898340000"
        },
        length: '200m',
        area: '12㎡',
        floor: '14/23层',
        price: '￥1390',
        type: [{
          name: '精装房',
          className: 'list_color1'
        }, {
          name: '地铁房',
          className: 'list_color2'
        }, ],
        address: '距离2号线川沙站600米',
        image: '../src/images/ad4.png'
      }, {
        name: '东方悦居苑1居室-北卧',
        location: {
          lat: "31.1701590000",
          lng: "121.5118080000"
        },
        length: '600m',
        area: '23㎡',
        floor: '02/11层',
        price: '￥3490',
        type: [{
          name: '地铁房',
          className: 'list_color2'
        }, {
          name: '随时看',
          className: 'list_color3'
        }],
        address: '距离6号线三林站500米',
        image: '../src/images/ad5.png'
      }, ]
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
    let lists2 = [{
      name: '御景豪园1居室-南卧',
      location: {
        lat: "31.1982850000",
        lng: "121.6898340000"
      },
      length: '200m',
      area: '12㎡',
      floor: '14/23层',
      price: '￥1390',
      type: [{
        name: '精装房',
        className: 'list_color1'
      }, {
        name: '地铁房',
        className: 'list_color2'
      }, ],
      address: '距离2号线川沙站600米',
      image: '../src/images/ad4.png'
    }, {
      name: '东方悦居苑1居室-北卧',
      location: {
        lat: "31.1701590000",
        lng: "121.5118080000"
      },
      length: '600m',
      area: '23㎡',
      floor: '02/11层',
      price: '￥3490',
      type: [{
        name: '地铁房',
        className: 'list_color2'
      }, {
        name: '随时看',
        className: 'list_color3'
      }],
      address: '距离6号线三林站500米',
      image: '../src/images/ad5.png'
    }, {
      name: '建华小区3居室-南卧',
      location: {
        lat: "31.2160550000",
        lng: "121.5563400000"
      },
      length: '500m',
      area: '16㎡',
      floor: '08/14层',
      price: '￥7190',
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
      address: '距离2号线世纪公园站150米',
      image: '../src/images/ad1.png'
    }]
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
                  <ListDetails lists={this.state.lists} />
               </div>
               <div id="listContent_right" className={this.state.showLeft ? 'hideStyle' : ''}>
                  <ListDetails lists={lists2} />
               </div>
            </div>
    )
  }
})