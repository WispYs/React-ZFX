'use strict';

import React from 'react';
import {Footer} from '../components/Footer';
let PublicDate = require('../vendor/publicdate.js');
export class Person extends React.Component {
    render() { 
        return (
            <div className="person">
                <div className="person_title">
                    <img src={require('../images/user.png')}/>
                    <p>13845756452</p>
                </div>
                <div className="person_info">
                    <ul>
                      {
                        PublicDate.Person_info.map(function(item,index){
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
                        PublicDate.Person_lists.map(function(item1,index){
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
}