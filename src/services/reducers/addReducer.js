// import { ADD } from "../constants/constants";

const initialTodos = {
  todos: [
    { text: "Finish homework", completed: false },
    { text: "Go grocery shopping", completed: true },
  ]
};

const addReducer = (state=initialTodos, action) => {
  let newTodo;
  switch (action.type) {
    case "ADD":
      newTodo = {
        text: action.payload.text,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    default:
      return {
        ...state,
      };
  }
}

export default addReducer;