'use strict';

import React from 'react';
var ListDetails = require('../components/ListDetails');
var Title = require('../components/Title');
var $ = require('jquery');
module.exports = React.createClass({
    getInitialState: function() {
        return {
            showFocus: false,
            productList: JSON.parse(window.sessionStorage.getItem('productList')) || '',
            focusList: [{
                time: '2017-01-13',
                name: '张亿航'
            }, {
                time: '2017-01-15',
                name: '李伟利'
            }, {
                time: '2017-01-16',
                name: '黄昊'
            }],
            setting: [{
                img: '../src/images/index_icon1.png',
                name: '床'
            }, {
                img: '../src/images/index_icon2.png',
                name: '衣柜'
            }, {
                img: '../src/images/index_icon3.png',
                name: '电视'
            }, {
                img: '../src/images/index_icon4.png',
                name: '冰箱'
            }, {
                img: '../src/images/index_icon5.png',
                name: '卫生间'
            }],
            moreLists: [{
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

        }
    },
    componentDidMount: function() {
        console.log(Number(this.state.productList.location.lng), Number(this.state.productList.location.lat))
        var map = new BMap.Map("container"); // 创建地图实例  
        var point = new BMap.Point(Number(this.state.productList.location.lng), Number(this.state.productList.location.lat));
        map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别 
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.GeolocationControl());

    },
    handleFocus: function() {
        this.setState({
            showFocus: !this.state.showFocus
        })
    },
    render: function() {
        var focusList;
        if (this.state.showFocus) {
            focusList =
                <div className="detail_focus_list">
                    <ul>
                        {
                            this.state.focusList.map(function(item,index){
                                return <li key={index}>
                                            <span>{item.time}</span>
                                            <em>{item.name}</em>
                                            加入意向房
                                       </li>
                            })
                        }
                    </ul>
                </div>
        }
        return (
            <div className="details">
                <Title content={this.state.productList.name}/>
                <div className="detail_content">
                    <img src={this.state.productList.image}/>
                    <div className="detail_content_title">
                        <p>{this.state.productList.name}</p>
                        <span>整租</span>
                    </div>
                    <div className="detail_content_price">
                        <b>{this.state.productList.price}</b>
                        <span>/月(押一付一)</span>
                    </div>
                    <div className="detail_content_info">
                        <ul>
                            <li>
                                <p>户型</p>
                                <p>3室1厅1卫</p>
                            </li>
                            <li>
                                <p>面积</p>
                                <p>{this.state.productList.area}</p>
                            </li>
                            <li>
                                <p>楼层</p>
                                <p>{this.state.productList.floor}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="detail_focus">
                    <div className="detail_focus_tit" onClick={this.handleFocus}>
                        <h3>房源记录（今天刷新）</h3>
                        <p>最近有<em>{this.state.focusList.length}</em>人加入意向房</p>
                    </div>
                    {focusList}
                </div>
                <div className="detail_location">
                    <h3>位置及周边</h3>
                    <div className="detail_map">
                        <div id="container"></div> 
                    </div>
                </div>
                <div className="detail_setting">
                    <h3>配套设备</h3>
                    <ul>
                        {
                            this.state.setting.map(function(item,index){
                                return  <li key={index}>
                                            <img src={item.img}/>
                                            <span>{item.name}</span>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="detail_about">
                    <h3>房源介绍</h3>
                    <p>暂无数据</p>
                </div>
                <div className="detail_moreList">
                    <h3>小区同户型房源</h3>
                    <ListDetails lists={this.state.moreLists} />
                </div>
                <div className="detail_bottom">
                    <div className="detail_bottom_left">
                        <span>咨询</span>
                        <span>分享</span>
                    </div>
                    <div className="detail_bottom_right">
                        <a href="javascript:;">加入收藏</a>
                        <a href="javascript:;">联系房东</a>
                    </div>
                </div>
            </div>
        );
    }
})