import React, { useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { connect } from "react-redux";
import { CREATE_TODO_REQUEST } from "../redux/actions/todo-action";
const TodoForm = ({ createTodo }) => {
  const [todo, setTodo] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-row pl-2 bg-gray-800 rounded-md border border-black">
        <CgPlayListAdd className="text-gray-500" size="45" />
        <input
          type="text"
          className="px-3 py-2 w-full text-gray-600 bg-gray-900 outline-none"
          placeholder="Add Task..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          required
        />
        <button disabled={!todo} className="px-4 text-gray-400 bg-gray-900 rounded-tr rounded-br">
          Add
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});
const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch({ type: CREATE_TODO_REQUEST, payload: todo }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);