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
    default:
      return state;
  }
};

export default todoReducer;
