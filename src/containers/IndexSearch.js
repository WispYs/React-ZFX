'use strict';

import React from 'react';
import {Footer} from '../components/Footer';
var Global = require('../vendor/global.js');
var $ = require('jquery');
class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            console.log("a")
        }
    }
    render() {
        return (
            <div className="indexSearch_searchList">
                <ul>
                    {                                             //React渲染Html拼接
                        this.props.lists.map(function(item,index){
                            function createMarkup() { return {__html: item}; };     
                            return <li onClick={this.handleClick} key={index}><div dangerouslySetInnerHTML={createMarkup()} /></li>                    
                        },this)
                    }
                </ul>
                <div className="indexSearch_nomore">没有更多信息</div>
            </div>
        )
    }
}
export class IndexSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultArr : [],
            showList : false
        }
        this.changeInput = (e) => {
            let result = [];
            let that = this;
            let keywords = e.target.value;
            if(keywords){
                $.post(
                    Global.apiUrl + "api/housevillage/DistrictVillage",{ pageindex : 1 ,pagesize : 20, keywords : keywords},
                    function(data){
                        $.each(data.data.items, function(index, val) {
                            var regex = new RegExp(keywords, 'g')
                            //提取正则匹配到的值
                            var reg = regex.exec(val.villagName);
                            if(reg){
                                var newStr = val.villagName.split(regex).join("<span style='color:#ff5400;'>"+reg+"</span>")
                            }else{
                                var newStr = val.villagName;
                            }
                            result.push(newStr)
                        });
                        that.setState({
                            resultArr: result,
                            showList: true
                        })
                    }
                )
            }else{
                this.setState({
                    resultArr: result,
                    showList: false
                })
            }
        }
        this.clearSearch = () => {
            this.refs.searchInput.value = ''
        }
        this.cancleSearch = () => {
            window.history.go(-1)
        }
    }
    render() {
        let searchResult,colseBtn;
        if(this.state.showList){
           colseBtn = <em onClick={this.clearSearch}></em>
           if(this.state.resultArr.length > 0){
                searchResult = <SearchList lists={this.state.resultArr}/>
           }else{
                searchResult = <div className="noSearch"><img width="70" src={require("../images/null.png")}/><p>没有查到相关的结果</p></div>
           }
        }
        return (
            <div className="indexSearch">
                <div className="indexSearch_title">
                    <input autoFocus ref='searchInput' type="text" placeholder="请输入小区、商圈、地铁站" onChange={this.changeInput}/>
                    <span onClick={this.cancleSearch}>取消</span>
                    {colseBtn}
                </div>
                <div className="indexSearch_content">
                    {searchResult}
                </div>
                <Footer/>
            </div>

        );
    }
}