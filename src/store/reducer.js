import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DETELE_TODO_ITEM, INIT_TODO_LIST} from './actionTypes'

const defaultState={
    inputValue:'123',
    list:[ 'Racing',
    'Japanese',
    'Australian']
}
// reducer 可以接收state,但不能修改state
export default (state=defaultState,action)=>{
    //state 上次传的数据
    const newState=JSON.parse(JSON.stringify(state));
    if(action.type===CHANGE_INPUT_VALUE){
       
        newState.inputValue=action.value;
        return newState

    }

    if(action.type===ADD_TODO_ITEM){
       
        newState.list=[...newState.list,action.value];
        newState.inputValue='';
        return newState

    }
    if(action.type===DETELE_TODO_ITEM){
       
        newState.list.splice(action.index,1);
       
        return newState
    }
    // 初始化数据
    if(action.type===INIT_TODO_LIST){
       
        newState.list=[...action.value];
       
        return newState

    }
    console.log(state,action)
    return state
}