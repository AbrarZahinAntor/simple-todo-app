import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length
    ? todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.content}
            </h3>
          </div>
        );
      })
    : null;
  return <div className="todos">{todoList}</div>;
};
export default Todos;
