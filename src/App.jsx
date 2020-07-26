import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "" }],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="App container collection">
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
