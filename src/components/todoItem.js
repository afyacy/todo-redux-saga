import React, { useState } from "react";
import PropTypes from "prop-types";
import { CgTrash, CgPen, CgCloseR } from "react-icons/cg";
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo?.todo);
  const check = () => {
    todo.status = !todo.status;
    updateTodo(todo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    todo.todo = newTodo;
    updateTodo(todo);
    setIsEditing(false);
  };
  return (
    <>
      <div className="flex flex-row justify-between items-start">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-6 h-6 text-gray-900 bg-gray-900"
            //updateTodo={todo.status}
            onClick={() => {
              check();
            }}
            defaultChecked={todo.status}
          />
          <span
            className={`ml-3 text-gray-400 ${
              todo.status ? "line-through" : ""
            }`}
          >
            {todo.todo}
          </span>
        </label>
        <div className="flex flex-row gap-3">
          {!todo.status && (
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? (
                <CgCloseR size="25" className="text-red-600" />
              ) : (
                <CgPen size="25" className="text-blue-600" />
              )}
            </button>
          )}

          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            <CgTrash size="25" className="text-gray-400" />
          </button>
        </div>
      </div>

      {isEditing && !todo.status && (
        <form onSubmit={onSubmit}>
          <div className="flex flex-row bg-gray-800 rounded border border-black">
            <input
              type="text"
              className="px-3 py-2 w-full text-gray-600 bg-gray-900 outline-none"
              placeholder="Add Task..."
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              value={newTodo}
              required
            />
            <button
              disabled={!newTodo}
              className="px-4 text-gray-400 bg-blue-900 rounded-tr rounded-br"
            >
              update
            </button>
          </div>
        </form>
      )}
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.any,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;