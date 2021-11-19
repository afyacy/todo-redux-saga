import {
  SET_LOADING,
  GET_TODOS,
  GET_TODO,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "../actions/todo-action";

const initialState = {
  loading: false,
  todos: [],
  todo: null,
};

const TodoSaga = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case GET_TODO:
      return {
        ...state,
        todo: payload,
      };

    case CREATE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false,
      };
    
    case EDIT_TODO:
      return {
        ...state,
        todos: [...state.todos],
        loading: false,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        loading: false,
      };
    
    default:
        return state
  }
};

export default TodoSaga;