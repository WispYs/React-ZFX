'use strict';

import React from 'react';
import {Footer} from '../components/Footer';
var PublicDate = require('../vendor/publicdate.js');
export class AreaSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeIndex: 0,
            firstIndex: 0,
            secondIndex: 0,
            thirdIndex: 0,
            typeList : ['区域', '租金', '户型', '更多'],
            contentShow: true
        }
        this.backFunction = () => {
            window.history.go(-1);
        }
        this.changeType = (index) => {
            console.log(index)
            this.setState({
                typeIndex: index,
                firstIndex: 0,
                secondIndex: 0,
                thirdIndex: 0,
                contentShow: true
            })
        }
        this.changeFirst = (index) => {
            this.setState({
                firstIndex: index,
                secondIndex: 0,
                thirdIndex: 0
            })
            /*console.log("%c ", "background: url(https://raw.githubusercontent.com/WispYs/React-ZFX/master/src/images/huaji.png) no-repeat center;padding-left:120px;padding-bottom: 200px;")*/
        }
        this.changeSecond = (index) => {
            this.setState({
                secondIndex: index,
                thirdIndex: 0
            })
        }
        this.changeThird = (index,e) => {
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
            })
        }
    }
    render() {
        let typeContent;
        if (this.state.typeIndex == 0) {
            typeContent =
                <div className="areaSearch_typeContent">
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_1">
                            {
                               PublicDate.AreaSearch_firstList.map(function(item,index){
                                    return <li key={index} onClick={this.changeFirst.bind(this,index)} className={this.state.firstIndex == index ? 'cur' : ''}>{item}</li>
                                },this) 
                            }
                        </ul>
                    </div>
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_2">
                            {
                               PublicDate.AreaSearch_secondList[this.state.firstIndex].map(function(item,index){
                                    return <li key={index} onClick={this.changeSecond.bind(this,index)} className={this.state.secondIndex == index ? 'cur' : ''}>{item}</li>
                                },this) 
                            }
                        </ul>
                    </div>
                    <div className="areaSearch_searchBox">
                        <ul className="areaSearch_ul_3">
                            {
                               PublicDate.AreaSearch_thirdList[this.state.firstIndex][this.state.secondIndex].map(function(item,index){
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
                           PublicDate.AreaSearch_huxingList.map(function(item,index){
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
                           PublicDate.AreaSearch_priceList.map(function(item,index){
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
}