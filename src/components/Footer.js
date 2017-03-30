'use strict';

import React from 'react';
export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: window.sessionStorage.getItem('footerIndex') || 0
    }
    this.footerClick = (index) => {
      this.setState({
        selectIndex: index
      });
      window.sessionStorage.setItem('footerIndex', index);
    }
  }
  render() {
    let lists = [{
      name: '首页',
      url: '#/'
    }, {
      name: '意向单',
      url: '#/yixiang'
    }, {
      name: '我的',
      url: '#/person'
    }]
    return (
      <div className="footer">
          <ul>
            {
              lists.map(function(item,index){
                return <li key={index} onClick={this.footerClick.bind(this,index)} ><a className={this.state.selectIndex == index ? 'cur' : ''} href={item.url}>{item.name}</a></li>
              },this)
            }
          </ul>
      </div>

    )
  }
  
}