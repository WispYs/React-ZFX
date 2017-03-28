'use strict';

import React from 'react';
var Footer = require('../components/Footer');
module.exports = React.createClass({
    getInitialState: function() {
        return {
            typeIndex: 0,
            firstIndex: 0,
            secondIndex: 0,
            thirdIndex: 0,
            typeList : ['区域', '租金', '户型', '更多'],
            contentShow: true
        }
    },
    backFunction: function() {
        window.history.go(-1);
    },
    changeType: function(index) {
        console.log(index)
        this.setState({
            typeIndex: index,
            firstIndex: 0,
            secondIndex: 0,
            thirdIndex: 0,
            contentShow: true
        })
    },
    changeFirst: function(index) {
        this.setState({
            firstIndex: index,
            secondIndex: 0,
            thirdIndex: 0
        })
        /*console.log("%c ", "background: url(https://raw.githubusercontent.com/WispYs/React-ZFX/master/src/images/huaji.png) no-repeat center;padding-left:120px;padding-bottom: 200px;")*/
    },
    changeSecond: function(index) {
        this.setState({
            secondIndex: index,
            thirdIndex: 0
        })
    },
    changeThird: function(index,e) {
        console.log(this.state)
        console.log(e.target.innerHTML,index,this.state.typeIndex)
        var checkedValue = e.target.innerHTML;
        this.setState({ 
            thirdIndex: index
        })
        var that = this;
        layer.open({
            type: 2,
            time: 2,
            end: function(){
                that.state.typeList.splice(that.state.typeIndex,1,checkedValue)
                console.log(that.state.firstIndex)
                that.setState({
                    typeList: that.state.typeList,
                    contentShow: false
                })
            }
        });
    },
    render: function() {
        let firstList = ["区域", "地铁", "附近"];
        let secondList = [
                ["不限", "浦东", "黄浦", "静安", "徐汇", "长宁", "虹口", "杨浦", "闸北", "普陀", "宝山", "闵行", "嘉定", "松江", "青浦", "奉贤", "金山", "崇明"],
                ["不限", "1号线", "2号线", "3号线", "4号线", "5号线", "6号线", "7号线", "8号线", "9号线", "10号线", "11号线", "12号线", "13号线", "16号线"],
                ["不限", "500m", "800m", "1000m"],
            ];
        let thirdList = [
            /*区域*/
            [
                ["不限"],
                ["不限","北蔡", "碧云", "川沙", "曹路", "大团镇", "东三林", "高行（北）", "高东（西）", "高东（东）", "高行（东）", "惠南", "航头", "合庆", "金桥（中）", "金杨", "金桥（南）", "金桥（北）", "康桥", "联洋", "临港新城", "陆家嘴", "老港镇", "南码头", "泥城镇", "世博", "世纪公园", "书院镇", "塘桥", "唐镇", "外高桥", "潍坊", "万祥镇", "西三林", "新场", "宣桥", "杨东", "洋泾", "源深", "张江", "周浦", "祝桥"],
                ["不限","董家渡", "打浦桥", "黄浦滨江", "淮海中路", "老西门", "南京东路", "蓬莱公园", "人民广场", "世博滨江", "五里桥", "新天地", "小东门街道", "豫园"],
                ["不限","曹家渡", "江宁路", "静安寺", "南京西路"],
                ["不限","漕河泾", "长桥", "衡山路", "华东理工", "华泾", "建国西路", "康健", "龙华", "上海南站", "田林", "万体馆", "斜土路", "徐汇滨江", "徐家汇", "植物园"],
                ["不限","北新泾", "古北", "虹桥", "天山", "西郊", "仙霞", "新华路", "镇宁路", "中山公园"],
                ["不限","北外滩", "江湾镇", "凉城", "临平路", "鲁迅公园", "曲阳", "四川北路"],
                ["不限","鞍山", "东外滩", "黄兴公园", "控江路", "五角场", "新江湾城", "周家嘴路", "中原"],
                ["不限","不夜城", "大宁", "彭浦", "西藏北路", "阳城", "永和", "闸北公园"],
                ["不限","曹杨", "长风", "长寿路", "长征", "甘泉宜川", "光新", "桃浦", "万里", "武宁", "真光", "真如", "中远两湾城"],
                ["不限","大场镇", "大华", "高境", "共富", "共康", "顾村", "罗店", "罗泾", "上大", "淞宝", "淞南", "通河", "杨行", "月浦", "张庙"],
                ["不限","春申", "古美", "航华", "华漕", "金虹桥", "金汇（闵行）", "静安新城", "老闵行", "龙柏", "罗阳", "马桥", "梅陇", "浦江", "七宝", "吴泾（东）", "吴泾（西）", "莘庄（南）", "莘庄（北）", "莘庄（西）", "颛桥"],
                ["不限","安亭", "丰庄", "华亭", "江桥", "菊园新区", "嘉定新城", "嘉定老城", "马陆", "南翔", "外冈", "新成路", "徐行"],
                ["不限","车墩", "九亭", "泖港", "佘山", "泗泾", "松江老城", "松江新城", "松江大学城", "石湖荡", "莘闵别墅", "新桥", "小昆山", "新浜", "叶榭"],
                ["不限","白鹤", "华新", "金泽", "练塘", "徐泾", "香花桥", "夏阳", "盈浦", "重固", "朱家角", "赵巷"],
                ["不限","奉城", "海湾", "金汇（奉贤）", "南桥", "青村", "四团", "柘林", "庄行"],
                ["不限","漕泾", "枫泾", "金山", "金山新城", "吕巷", "廊下", "山阳", "石化", "亭林", "张堰", "朱泾"],
                ["不限","崇明县", "横沙岛", "长兴岛"]
            ],
            /*地铁*/
            [
                ["不限"],
                ["莘庄", "外环路", "莲花路", "锦江乐园", "上海南站", "漕宝路", "上海体育馆", "徐家汇", "衡山路", "常熟路", "陕西南路", "黄陂南路", "人民广场", "新闸路", "汉中路", "上海火车站", "中山北路", "延长路", "上海马戏城", "汶水路", "彭浦新村", "共康路", "通河新村", "呼兰路", "共富新村", "宝安公路", "友谊西路", "富锦路"],
                ["徐泾东", "虹桥火车站", "虹桥2号航站楼", "淞虹路", "北新泾", "威宁路", "娄山关路", "中山公园", "江苏路", "静安寺", "南京西路", "人民广场", "南京东路", "陆家嘴", "东昌路", "世纪大道", "上海科技馆", "世纪公园", "龙阳路", "张江高科", "金科路", "广兰路", "唐镇", "创新中路", "华夏东路", "川沙", "凌空路", "远东大道", "海天三路", "浦东国际机场"],
                ["江杨北路", "铁力路", "友谊路", "宝杨路", "水产路", "淞滨路", "张华浜", "淞发路", "长江南路", "殷高西路", "江湾镇", "大柏树", "赤峰路", "虹口足球场", "东宝兴路", "宝山路", "上海火车站", "中潭路", "镇坪路", "曹杨路", "金沙江路", "中山公园", "延安西路", "虹桥路", "宜山路", "漕溪路", "龙漕路", "石龙路", "上海南站"],
                ["宜山路", "虹桥路", "延安西路", "中山公园", "金沙江路", "曹杨路", "镇坪路", "中潭路", "上海火车站", "宝山路", "海伦路", "临平路", "大连路", "杨树浦路", "浦东大道", "世纪大道", "浦电路", "蓝村路", "塘桥", "南浦大桥", "西藏南路", "鲁班路", "大木桥路", "东安路", "上海体育场", "上海体育馆"],
                ["莘庄", "春申路", "银都路", "颛桥", "北桥", "剑川路", "东川路", "金平路", "华宁路", "文井路", "闵行开发区"],
                ["港城路", "外高桥保税区北", "航津路", "外高桥保税区南", "洲海路", "五洲大道", "东靖路", "巨峰路", "五莲路", "博兴路", "金桥路", "云山路", "德平路", "北洋泾路", "民生路", "源深体育中心", "世纪大道", "浦电路", "蓝村路", "上海儿童医学中心", "临沂新村", "高科西路", "东明路", "高青路", "华夏西路", "上南路", "灵岩南路", "东方体育中心"],
                ["花木路", "龙阳路", "芳华路", "锦绣路", "杨高南路", "高科西路", "云台路", "耀华路", "长清路", "后滩", "龙华中路", "东安路", "肇嘉浜路", "常熟路", "静安寺", "昌平路", "长寿路", "镇坪路", "岚皋路", "新村路", "大华三路", "行知路", "大场镇", "场中路", "上大路", "南陈路", "上海大学", "祁华路", "顾村公园", "刘行", "潘广路", "罗南新村", "美兰湖"],
                ["市光路", "嫩江路", "翔殷路", "黄兴公园", "延吉中路", "黄兴路", "江浦路", "鞍山新村", "四平路", "曲阳路", "虹口足球场", "西藏北路", "中兴路", "曲阜路", "人民广场", "大世界", "老西门", "陆家浜路", "西藏南路", "中华艺术宫", "耀华路", "成山路", "杨思", "东方体育中心", "凌兆新村", "芦恒路", "浦江镇", "江月路", "联航路", "沈杜公路"],
                ["杨高中路", "世纪大道", "商城路", "小南门", "陆家浜路", "马当路", "打浦桥", "嘉善路", "肇嘉浜路", "徐家汇", "宜山路", "桂林路", "漕河泾开发区", "合川路", "星中路", "七宝", "中春路", "九亭", "泗泾", "佘山", "洞泾", "松江大学城", "松江新城", "松江体育中心", "醉白池", "松江南站"],
                ["虹桥火车站", "虹桥2号航站楼", "虹桥1号航站楼", "上海动物园", "龙溪路", "水城路", "伊犁路", "宋园路", "虹桥路", "交通大学", "上海图书馆", "陕西南路", "新天地", "老西门", "豫园", "南京东路", "天潼路", "四川北路", "海伦路", "邮电新村", "四平路", "同济大学", "国权路", "五角场", "江湾体育场", "三门路", "殷高东路", "新江湾城"],
                ["嘉定北", "嘉定西", "白银路", "嘉定新城", "马陆", "南翔", "桃浦新村", "武威路", "祁连山路", "李子园", "上海西站", "真如", "枫桥路", "曹杨路", "隆德路", "江苏路", "交通大学", "徐家汇", "上海游泳馆", "龙华", "云锦路", "龙耀路", "东方体育中心", "三林", "三林东", "浦三路", "御桥", "罗山路", "秀沿路", "康新公路", "迪士尼"],
                ["七莘路", "虹莘路", "顾戴路", "东兰路", "虹梅路", "虹漕路", "桂林公园", "漕宝路", "龙漕路", "龙华", "龙华中路", "大木桥路", "嘉善路", "陕西南路", "南京西路", "汉中路", "曲阜路", "天潼路", "国际客运中心", "提篮桥", "大连路", "江浦公园", "宁国路", "隆昌路", "爱国路", "复兴岛", "东陆路", "巨峰路", "杨高北路", "金京路", "申江路", "金海路"],
                ["世博大道", "世博会博物馆", "马当路", "新天地", "淮海中路", "南京西路", "自然博物馆", "汉中路", "江宁路", "长寿路", "武宁路", "隆德路", "金沙江路", "大渡河路", "真北路", "祁连山南路", "丰庄", "金沙江西路", "金运路"],
                ["滴水湖", "临港大道", "书院", "惠南东", "惠南", "野生动物园", "新场", "航头东", "鹤沙航城", "周浦东", "罗山路", "华夏中路", "龙阳路"]

            ],
            /*附近*/
            [
                ["不限"],
                ["500m"],
                ["800m"],
                ["1000m"],
            ],

        ];
        let priceList = ['不限','1500元以下', '1500-3000元', '3000-4000元', '4000-5000元', '5000-7000元', '7000元以上'];
        let huxingList = ['不限','1室','2室','3室','4室','4室以上'];
        let typeContent;
        if (this.state.typeIndex == 0) {
            typeContent =
                <div className="areaSearch_typeContent">
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_1">
                            {
                               firstList.map(function(item,index){
                                    return <li key={index} onClick={this.changeFirst.bind(this,index)} className={this.state.firstIndex == index ? 'cur' : ''}>{item}</li>
                                },this) 
                            }
                        </ul>
                    </div>
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_2">
                            {
                               secondList[this.state.firstIndex].map(function(item,index){
                                    return <li key={index} onClick={this.changeSecond.bind(this,index)} className={this.state.secondIndex == index ? 'cur' : ''}>{item}</li>
                                },this) 
                            }
                        </ul>
                    </div>
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_3">
                            {
                               thirdList[this.state.firstIndex][this.state.secondIndex].map(function(item,index){
                                    return <li key={index} onClick={this.changeThird.bind(this,index)} className={this.state.thirdIndex == index ? 'cur' : ''}>{item}</li>
                                },this) 
                            }
                        </ul>
                    </div>
                </div>
        }else if(this.state.typeIndex == 1){
            typeContent = 
                <div className="areaSearch_typeContent">
                    <ul>
                        {
                           huxingList.map(function(item,index){
                                return <li key={index} onClick={this.changeThird.bind(this,index)} className={this.state.thirdIndex == index ? 'cur' : ''}>{item}</li>
                            },this) 
                        }
                    </ul>
                </div>
        }else if(this.state.typeIndex == 2){
            typeContent = 
                <div className="areaSearch_typeContent">
                    <ul>
                        {
                           priceList.map(function(item,index){
                                return <li key={index} onClick={this.changeThird.bind(this,index)} className={this.state.thirdIndex == index ? 'cur' : ''}>{item}</li>
                            },this) 
                        }
                    </ul>
                </div>
        }else{
            typeContent = 
                <div className="areaSearch_typeContent">
                    <p>敬请期待！</p>
                </div>
        }
        return (
            <div className="areaSearch">
                <div className="areaSearch_title">
                    <span onClick={this.backFunction}></span>
                    <input type="text" placeholder="请输入小区、商圈、地铁站" />
                </div>
                <div className="areaSearch_type">
                    <ul>
                        {
                            this.state.typeList.map(function(item,index){
                                return <li key={index} className={this.state.typeIndex == index ? 'cur' : ''} onClick={this.changeType.bind(this,index)}><span>{item}<em></em></span></li>
                            },this)
                        }
                    </ul>
                </div>
                <div className={this.state.contentShow ? '' : 'hideStyle'}>
                    {typeContent}
                </div>
                <div className={this.state.contentShow ? 'hideStyle' : ''}>
                    <div className="areaSearch_typeContentNull">
                        <img src="../src/images/yxd_nolist.png" />
                        <p>没有数据</p>
                    </div>
                </div>
                
            </div>
        );
    }
})