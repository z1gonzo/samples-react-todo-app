import React, { Component } from 'react';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
  render() {
    return <h1>Hello2, {this.props.name}</h1>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from state",
      newTodo: "",
      todos: [{
        title: "Learn React",
        done: false
      }]
    }
  }

  newTodoChanged(event) {
    // console.log(event.target.value)
    this.setState({
      newTodo: event.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(this.state.newTodo)
    this.setState({
      newTodo: "",
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  render() {
    return (
      <div className="App">
        {/* <Welcome name="Functional component"/> */}
        {/* <Welcome2 name="Class Component"/> */}
        <h1>{this.state.message}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input 
            onChange={(event) => this.newTodoChanged(event)} 
            id="newTodo" 
            name="newTodo" 
            value={this.state.newTodo}/>
          <button type="submit">Add new Todo</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;