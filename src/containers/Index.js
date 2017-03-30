'use strict';

import React from 'react';
import {
  Router, Route, Link 
}
from 'react-router';
import {ListDetails} from '../components/ListDetails';
import {Footer} from '../components/Footer';
let PublicDate = require('../vendor/publicdate.js');
class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="isearch">
                    <Link to="/indexSearch">
                        <span>搜索</span>
                    </Link>
                </div>
                <img className="bannerImg" src="../src/images/banner.png"/>
            </div>
        )
    }
}
class Type extends React.Component {
    render() {
        return (
            <div className="typeBox">
                <ul>
                    {
                        PublicDate.Index_typeLists.map(function(item,index){
                            return <Link to={item.href} key={index}><li className="typeList"><img className="typeImg" src={item.src}/><span>{item.name}</span></li></Link>
                        })
                    }
                </ul>
            </div>
        )
    }
}
class ListContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addClassIndex: 0, //用于添加class
            showLeft: true,
            list_left: PublicDate.listContent_left,
            list_right: PublicDate.listContent_right
        }
        this.handleClick = (index,e) => {
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
        }
        this.listsClick = (index,e) => {
            console.log(index)
        }
    }
  render() {
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
}
export class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="index_top">
                    <Banner/>
                    <Type/>
                </div>
                <div className="list">
                    <div className="list_title">
                        <span className="list_left">当前位置：<em>徐家汇商圈</em></span>
                        <span className="list_right_btn">重新定位</span>
                    </div>
                    <ListContent/>
                    <div className="no_list">没有更多信息</div>
                </div>
                <Footer/>
            </div>
        );
    }
}