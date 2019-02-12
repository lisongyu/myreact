import React, {Component} from 'react';
import { Input,Button,List } from 'antd';
class TodoListUI extends Component{
    constructor(props){
      super(props);
    }
    render(){
        return (
            <div>
           <div>
           <Input value={this.props.inputValue} onChange={this.props.handleInputChange} placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
           </div>
           <List dataSource={this.props.list}
            renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
           />

          
           </div>
        )
    }
}

export default TodoListUI
