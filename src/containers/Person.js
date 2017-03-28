'use strict';

import React from 'react';
var Footer = require('../components/Footer');
module.exports = React.createClass({
    render: function(){
        let info = [
              {
                name: '意向房',
                num: '2',
                url: '#/yixiang'
              },
              {
                name: '我的收藏',
                num: '7',
                url: '#/'
              },
              {
                name: '租赁合同',
                num: '1',
                url: '#/'
              },
          ]
        let lists = [
              {
                name:"person_price",
                list:[
                    {
                        name: '交易保障金',
                        number: '￥500'
                    },{
                        name: '我的优惠券'
                    }
                ]
              },{
                name:"person_problem",
                list:[
                    {
                        name: '问题反馈'
                    },{
                        name: '帮助中心'
                    },{
                        name: '联系客服',
                        tel:'021-65987278'
                    }
                ]
              },{
                name: 'person_us',
                list:[
                    {
                        name:'关于我们'
                    }
                ]
              }
          ]
        return (
            <div className="person">
                <div className="person_title">
                    <img src="../src/images/user.png" />
                    <p>13845756452</p>
                </div>
                <div className="person_info">
                    <ul>
                      {
                        info.map(function(item,index){
                          return <li key={index}>
                                    <a href={item.url}>
                                        <span className="number">{item.num}</span>
                                        <span className="text">{item.name}</span>
                                    </a>
                                 </li>
                        })
                      }
                    </ul>
                </div>
                <div className="person_list">
                    {
                        lists.map(function(item1,index){
                            return <div key={index} className="person_list_box">
                                     <ul>
                                       {
                                        item1.list.map(function(item2,index){
                                            return <li key={index}>
                                                      <span>{item2.name}</span>
                                                      <em>{item2.number}</em>
                                                      <i>{item2.tel}</i>
                                                   </li>
                                        })
                                       } 
                                     </ul>  
                                   </div>
                        })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
})