import todoActionType from "../actiontypes";

const ADD_TO_CONTENT=(val) => {
    return {
        type:todoActionType.todo.ADD_TO_CONTENT, payload:val
    }
} 

const ADD_FILTER=(val) => {
    return {
        type:todoActionType.todo.ADD_FILTER, payload:val
    }
} 

const ADD_TO_LIST=(val) => {
    return {
        type:todoActionType.todo.ADD_TO_LIST, payload:val
    }
} 

const DELETE_SELECTED=(val) => {
    return {
        type:todoActionType.todo.DELETE_SELECTED, payload:val
    }
}


const todoActions = {ADD_TO_CONTENT,ADD_FILTER,ADD_TO_LIST,DELETE_SELECTED};
export default todoActions;
