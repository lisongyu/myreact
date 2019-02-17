import React, { Component } from 'react';
import store from './store';
import {getInputChangeAction,getItemAddeAction,getItemDeleteeAction,getInitList} from './store/actionCreators'

import TodoListUI from './TodoListUI';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
       
        console.log(store.getState());
        store.subscribe(this.handleStoreChange);
    }
   render(){
       return (
       <TodoListUI 
       inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}

        />
       )
   }
   componentDidMount(){

   

          const action=getInitList();
          store.dispatch(action)
          console.log(action)
        

        
   

   }
   handleInputChange(e){
       const action=getInputChangeAction(e.target.value)
       store.dispatch(action)

   }
   handleStoreChange(){
      
       this.setState(store.getState());
   }
   handleBtnClick(){
       var getValue=store.getState().inputValue;

       const action=getItemAddeAction(getValue)
       store.dispatch(action);   

   }
   handleItemDelete(index){
       const action=getItemDeleteeAction(index)
       store.dispatch(action)

   }
    
}
export default TodoList