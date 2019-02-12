import React, { Component,Fragment } from 'react';

import './App.css';
import './todoItem.js';
import TodoItem from './todoItem.js';
import Test from './test';
import axios from 'axios';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleItemDetele=this.handleItemDetele.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this)
    //组件的状态
    this.state={
      inputValue:'hello',
      list:[]
    }

  }
  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label> <input id="insertArea" value={this.state.inputValue} type="text" onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>

        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>

    );
  }
  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return <TodoItem deleteItem={this.handleItemDetele} content={item} index={index} key={index}/>
    })
  }
  handleInputChange(event){
    const eValue=event.target.value
    this.setState(()=>({
     
        inputValue:eValue
    })

    )
   
  
  }
  // componentWillMount(){
  //   console.log('componentWillMount')
  // }
  // shouldComponentUpdate(){
  //   console.log('组件被更新之前被自动执行');
  //   return true
  // }
  // componentWillUpdate(){
  //   console.log('组件被更新之前执行，在should之后')
  // }
  componentDidMount(){
    // axios.get('/api/todoList').then((res)=>{
    //   this.setState(()=>({
    //     list:[...res.data]
    //   }))
    // }).catch(()=>{
    //   alert('error')
    // });
   
  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''

    }))
    
  }
  handleItemDetele(index){
   
      this.setState((prevState)=>{
        const list=[...prevState.list];
        list.splice(index,1);

        return {list}

      })
      
    

  }
}




export default TodoList;
