/**
 * Created by Administrator on 2017/9/25 0025.
 */
import React,{ Component } from 'react'

export default class TodoItem extends Component{
    render(){
        return <div>{this.props.todo.title}</div>
    }
}