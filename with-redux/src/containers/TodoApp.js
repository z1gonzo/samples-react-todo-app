import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../store'

import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

class TodoApp extends Component {
  constructor() {
    super();
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked // update done property on copied todo
    }; // copy the todo can also use Object.assign
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.message}</h3>
        <NewTodoForm
            newTodo={this.props.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.newTodoChanged(newTodo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
