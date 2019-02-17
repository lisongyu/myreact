import React, {Component} from 'react';
import { Input,Button,List } from 'antd';
const TodoListUI=(props)=>{
    return (
        <div>
            <div>
            <Input value={props.inputValue} onChange={props.handleInputChange} placeholder="todo info" style={{width:'300px',marginRight:'10px'}} />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List dataSource={props.list}
                renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}/>
       </div>
    )
}
export default TodoListUI
