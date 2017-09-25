/**
 * Created by Administrator on 2017/9/25 0025.
 */
import React,{ Component } from 'react';

export default class TodoInput extends  Component{
    render(){
        return <input type="text" value={this.props.content}/>
    }
}