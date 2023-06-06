import todoActionType from "../actiontypes";

const INITIAL_STATE = {  
    list: [],
    content: '',
    filtcontent: '',
};


const todoReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case todoActionType.todo.ADD_TO_CONTENT:
          return {
           ...state,
           content: action.payload
          };
        case todoActionType.todo.ADD_TO_LIST:
          return {
           ...state,
           content: '',
           list : [
            ...state.list,
            action.payload
           ]
          };
        case todoActionType.todo.ADD_FILTER :
          return {
            ...state,
            filtcontent: action.payload
          };
        case todoActionType.todo.DELETE_SELECTED:
    
          return{
            ...state,
            list: action.payload
          }
        default:
          return state;
      }
}

export default todoReducer;