const initialTodos = {
  todos: [],
};

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos,
        ],
      };

    case "DELETE_TODO":
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
