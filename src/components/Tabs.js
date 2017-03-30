'use strict';

import React from 'react';
export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addClassIndex: 0             //用于添加class
        }
        this.handleClick = (index) => {
            console.log(index)
            this.setState({addClassIndex: index});
            var newState;                   //向父级元素传递状态参数
            if(index == 0){
              newState = true;
            }else{
              newState = false;
            }
            this.props.callbackParent(newState);
        }
    }
    render() {
        return (
            <div className="tabs">
                <ul>
                    {
                      this.props.tabs.map(function(item,index){
                        return <li key={index} onClick={this.handleClick.bind(this,index)} className={this.state.addClassIndex == index ? 'cur' : ''}>{item}</li>
                      },this)
                    }
                </ul>
            </div>
            
        )
    }
}