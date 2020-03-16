const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';


const initialState = {
    message: 'Hello Coding Garden!!',
    newTodo: '',
    todos: [{
      title: 'Learn React',
      done: false
    }, {
      title: 'Learn JSX',
      done: false
    }]
  };

export const actions = {
  newTodoChanged(newTodo) {
    return {
      type: NEW_TODO_CHANGED,
      newTodo
    };
  }
} 

export function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_TODO_CHANGED: {
      return {
        ...state,
        newTodo: action.newTodo
      }
    }
    default: 
      return state;
  }   
}

