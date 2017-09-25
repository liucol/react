/**
 * Created by Administrator on 2017/9/25 0025.
 */
import React,{ Component } from 'react';

export default class TodoInput extends  Component{
    render(){
        return <input type="text" defaultvalue={this.props.content} onKeyPress={this.submit}/>
    }
    submit(e){
        if(e.key==='Enter'){
            this.props.onSubmit.call()
        }
    }
}