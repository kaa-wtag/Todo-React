// import { ADD } from "../constants/constants";

const initialTodos = {
  todos: [
    { text: "Finish homework", created_at: '27.06.2023', completed: false },
    { text: "Go grocery shopping", created_at: '27.06.2023', completed: true },
  ]
};

const addReducer = (state=initialTodos, action) => {
  let newTodo, filteredTodos;
  switch (action.type) {
    case "ADD":
      newTodo = {
        text: action.payload.text,
        created_at: action.payload.created_at,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    case "DELETE":
      filteredTodos = state.todos.filter(
        (todo, index) => index !== action.payload.index
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return {
        ...state,
      };
  }
}

export default addReducer;