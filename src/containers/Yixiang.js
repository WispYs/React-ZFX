'use strict';

import React from 'react';
var PublicDate = require('../vendor/publicdate.js');
import {Tabs} from '../components/Tabs';
import {ListDetails} from '../components/ListDetails';
import {Footer} from '../components/Footer';

export class Yixiang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClassIndex: 0, //用于添加class
      showState: true,
      noList_before: false,
      noList_after: false,
      tabs: ['待出价', '已出价']
    }
    this.onChildChanged = (newState) => {
      this.setState({
        showState: newState
      });
    }
    this.listsClick = (index, e) => {
      console.log(index)
    }
  }
  render() {
    let beforeHtml, afterHtml;
    if (this.state.noList_before) {
      beforeHtml =
        <div className="yxd_nolist">
                        <img src="../src/images/yxd_nolist.png"/>
                        <p>还在努力寻找吗？不妨点我试试看！</p>
                    </div>
    }
    if (this.state.noList_after) {
      afterHtml =
        <div className="yxd_nolist">
                        <img src="../src/images/yxd_nolist.png"/>
                        <p>出价即可优先订房，再不出手，花都谢了！</p>
                    </div>
    }
    return (
      <div className="yixiangdan">
                <Tabs showState={this.state.showState} callbackParent={this.onChildChanged} tabs={this.state.tabs}/>
                <div className={this.state.showState ? '' : 'yxd_hide'}>
                    <div className="yxd_beforeList">
                        <div className="yxd_listBox">
                            <ListDetails lists={PublicDate.Yixiangfang_beforeList}/>
                        </div>
                        {beforeHtml}
                    </div>
                </div>
                <div className={this.state.showState ? 'yxd_hide' : ''}>
                    <div className="yxd_afterList">
                        <div className="yxd_listBox">
                            <ListDetails lists={PublicDate.Yixiangfang_afterList}/>
                        </div>
                        {afterHtml}
                    </div>
                </div>
                <Footer/>
            </div>
    )
  }
}