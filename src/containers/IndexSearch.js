'use strict';

import React from 'react';
var Footer = require('../components/Footer');
var SearchList = React.createClass({
    render:function(){
        return (
            <div className="indexSearch_searchList">
                <ul>
                    {
                        this.props.lists.map(function(item,index){
                            return <li key={index}>{item}</li>                    
                        })
                    }
                </ul>
            </div>
        )
    }
})
module.exports = React.createClass({
    getInitialState: function(){
        return {
            lists : ["aa",'ab','add','dddd','ddsa','安娜'],
            resultArr : [],
            showList : false
        }
    },
    changeInput: function(e){
        let result = [];
        this.state.lists.map(function(item,index){
            if(item.indexOf(e.target.value) !== -1){
                result.push(item)
            }
        })
        if(e.target.value){
            this.setState({
                resultArr: result,
                showList: true
            })
        }else{
            this.setState({
                resultArr: result,
                showList: false
            })
        }
    },
    clearSearch: function(){
        this.refs.searchInput.value = ''
    },
    render: function(){
        let searchResult,colseBtn;
        if(this.state.showList){
           colseBtn = <em onClick={this.clearSearch}></em>
           if(this.state.resultArr.length > 0){
                searchResult = <SearchList lists={this.state.resultArr}/>
           }else{
                searchResult = <div className="noSearch"><img width="70" src="../src/images/null.png"/><p>没有查到相关的结果</p></div>
           }
        }
        return (
            <div className="indexSearch">
                <div className="indexSearch_title">
                    <input autoFocus ref='searchInput' type="text" placeholder="请输入小区、商圈、地铁站" onChange={this.changeInput}/>
                    <span>取消</span>
                    {colseBtn}
                </div>
                <div className="indexSearch_content">
                    {searchResult}
                </div>
                <Footer/>
            </div>

        );
    }
})