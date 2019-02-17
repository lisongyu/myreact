import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DETELE_TODO_ITEM,
    INIT_TODO_LIST,
    GET_INIT_LIST
} from './actionTypes';

export const getInputChangeAction = (value) => ({

    type: CHANGE_INPUT_VALUE,
    value

})
export const getItemAddeAction = (value) => ({
    type: ADD_TODO_ITEM,
    value
})
export const getItemDeleteeAction = (index) => ({
    type: DETELE_TODO_ITEM,
    index

})
export const initListAction = (value) => ({
    type: INIT_TODO_LIST,
    value

})

export const getInitList= (value) => ({
    type: GET_INIT_LIST,
    value

})
