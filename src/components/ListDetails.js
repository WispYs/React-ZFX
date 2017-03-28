'use strict';

import React from 'react';
import {
  Router, Route, Link, Lifecycle 
}
from 'react-router';
module.exports = React.createClass({
 
  listsClick: function(index) {
    let that = this;
    layer.open({
        type: 2,
        time: 2,
        end: function(){
          console.log("end")
          window.sessionStorage.setItem('productList', JSON.stringify(that.props.lists[index]));
          window.location.reload(); //React 跳转当前路由不刷新页面  采用强制刷新
          window.scrollTo(0, 0); //React Router不维护scroll position 
        }
    });

    
  },
  render: function() {
    return (
      <div className="listDetails">
                {   
                    this.props.lists.map(function(item,index){
                      var titleHtml,bottomHtml;
                      if(item.titleType){                       //实现Angular ng-if
                        titleHtml = 
                                <div className="list_title">
                                  <em>{item.titleType}</em>
                                  <span>{item.titleRight}</span> 
                                </div>
                      }
                      if(item.bottom){                       
                        bottomHtml = 
                              <div className="list_set"> 
                                <ul> 
                                  {
                                    item.bottom.map(function(item3,index){
                                      return <li key={index}>{item3}</li>
                                    })
                                  }
                                </ul>
                              </div> 
                      }                                          
                      return <div key={index}>              
                              {titleHtml}
                              <Link to="/details">
                              <dl ref={'details_' + index} onClick={this.listsClick.bind(this,index)}>        {/*react字符串拼接*/} 
                                <dt><img src={item.image}/></dt>
                                <dd>
                                  <h2><span>{item.name}</span><em>>{item.length}</em></h2>
                                  <div className="list_about">
                                      <span>{item.area}</span>
                                      |
                                      <span>{item.floor}</span>
                                      <div className="list_price"><em>{item.price}</em>/月</div>
                                  </div>
                                  <div className="list_tag">
                                      {
                                        item.type.map(function(item2,index){
                                          return <em key={index} className={item2.className}>{item2.name}</em>
                                        })
                                      }
                                  </div>
                                  <div className="list_adress"><i className="iconfont icon-ditu2"></i>{item.address}</div>
                               </dd>
                              </dl>
                              </Link>
                              {bottomHtml}
                             </div>
                    },this)
                }
            </div>
    )
  }
})