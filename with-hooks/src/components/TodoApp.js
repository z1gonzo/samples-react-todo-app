import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';




const TodoApp = (props) => {
  const message = 'Hello from Hooks';
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{
    title: 'Siema',
    done: true
  }, {
    title: 'Witam',
    done: false
  }]);

const newTodoChanged = (e) => {
  setNewTodo(e.target.value)
  }

const formSubmitted = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      title: newTodo,
      done: false
    }])
    setNewTodo('');
  }

const removeTodo = (index) => {
  const newTodos = [...todos]; // nie mogę zdefiniować nowego todos i jest newTodos
    newTodos.splice(index, 1);
  setTodos(newTodos);
}

const toggleTodoDone = (event, index) => {
  const newTodos = [...todos];
  newTodos[index] = { ...newTodos[index], done: event.target.checked };
  setTodos(newTodos);
}

const allDone = () => {
  const newTodos = todos
  .map(todo => { return {
      title: todo.title,
      done: true }
    })
  setTodos(newTodos);
}

  return (
    <div className="App">
      <h3>{message}</h3>
      <NewTodoForm
          newTodo={newTodo}
          formSubmitted={formSubmitted.bind(this)}
          newTodoChanged={newTodoChanged.bind(this)} 
          />
      <button onClick={() => allDone()}>All Done</button>
      <TodoList
        todos={todos}
        toggleTodoDone={toggleTodoDone.bind(this)}
        removeTodo={removeTodo.bind(this)}
        />
    </div>
  );
}

export default TodoApp;